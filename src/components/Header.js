import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img className="personal" src="https://avatars.dicebear.com/api/avataaars/avatar.svg" />
        </div>
      </div>
    </div>
  )  
}
  
export default Header