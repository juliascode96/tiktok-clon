import { useState, useEffect } from 'react'
import axios from 'axios'

import FollowersColumn from "../components/FollowersColumn"
import Card from "../components/Card"
import MiniCard from "../components/MiniCard"

const Home = () => {

    const [users, setUsers] = useState(null)
    let descendingUsers

    const addData = async () => {
        await axios.post('.netlify/functions/addData')
    }

    const fetchData = async () => {
        const results = await axios.get('.netlify/functions/posts')
        const res = Object.values(results.data[1])
        setUsers(res)
    }

    useEffect(() => {
        addData()
        fetchData()
    }, [])

    if (users) {
        descendingUsers = users.sort((a, b) => a.id < b.id ? 1 : -1)
      }

    return(
        <>

        { descendingUsers && (      
        <div className="container">
            <FollowersColumn />
            <div className='feed'> <h1>Home</h1>
                {descendingUsers.map((user, index) => {
                    return (                    
                    <Card 
                        key={index}
                        user={user}
                    />)

                })}
            </div>
            <div className='box'>
                <div className="section">
                    <div className="suggested">
                        <h2 className="bold">Suggested accounts</h2>
                        <div className="break" />
                    </div>
                </div>
            </div>
        </div>
        )}

        </>
    )
}

export default Home
