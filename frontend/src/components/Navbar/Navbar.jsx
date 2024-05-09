import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='container'>
        <div className='container-logo'>
          <h3>EazyGrad</h3>
          <input type={'text'} placeholder='Search' />
        </div>
        <div className='container-links'>
          <ul>
            <li>Learn</li>
            <li>Practice</li>
            <li>Membership</li>
            <li>Complete</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <div className='container-buttons'>
            <div className='container-line'></div>
            <button className='login-button'>Login</button>
            <div className='container-line'></div>
            <button className='host-button'>Host</button>
            <button className='business-button'>Business</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar

