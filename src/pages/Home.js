import { useState, useEffect } from 'react'
import axios from 'axios'

import FollowersColumn from "../components/FollowersColumn"
import Card from "../components/Card"
import MiniCard from "../components/MiniCard"

const Home = () => {

    const [users, setUsers] = useState(null)
    const [userToToggle, setUserToToggle] = useState(null)
    let descendingUsers
    let topFiveFollowing
    let topFiveNotFollowing

    const addData = async () => {
        await axios.post('.netlify/functions/addData')
    }

    const fetchData = async () => {
        const results = await axios.get('.netlify/functions/posts')
        const res = Object.values(results.data[1])
        setUsers(res)
    }

    if(userToToggle) {
        const newValue = userToToggle.is_followed ? false : true
        const data = {is_followed: newValue}

        axios.put('/.netlify/functions/edit', {userId: userToToggle.id, data: data})
            .then(() => fetchData())
            setUserToToggle(null)
    }

    useEffect(() => {
        addData()
        fetchData()
    }, [])

    if (users) {
        descendingUsers = users.sort((a, b) => a.id < b.id ? 1 : -1)

        const following = users.filter(user => user.is_followed)
        const descendingFollowing = following.sort((a, b) => a.likes < b.likes ? 1 : -1)
        topFiveFollowing = descendingFollowing.slice(0,5)

        const notFollowing = users.filter(user => user.is_followed === false)
        const descendingNotFollowing = notFollowing.sort((a, b) => a.likes < b.likes ? 1 : -1)
        topFiveNotFollowing = descendingNotFollowing.slice(0,5)
      }

    return(
        <>

        { descendingUsers && (      
        <div className="container">
            <FollowersColumn users={topFiveFollowing} />
            <div className='feed'> <h1>Home</h1>
                {descendingUsers.map((user, index) => {
                    return (                    
                    <Card 
                        key={index}
                        user={user}
                        toggleFollow={userToToggle => setUserToToggle(userToToggle)}
                    />)

                })}
            </div>
            <div className='box'>
                <div className="section">
                    <div className="suggested">
                        <h2 className="bold">Suggested accounts</h2>
                        <div className="break" />
                        {topFiveNotFollowing.map((user, key) => {
                            return (
                                <MiniCard 
                                    key={key}
                                    user={user}
                                />
                            )
                        })


                        }
                    </div>
                </div>
            </div>
        </div>
        )}

        </>
    )
}

export default Home
