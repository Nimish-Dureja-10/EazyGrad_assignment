import React, { useState, useEffect } from 'react';
import './Navbar.css';

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
  );
};

const MobileNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false); // Initially set to false for mobile screens

  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      // Set showNavbar based on screen width
      setShowNavbar(window.innerWidth > 864); // Adjust the width as per your tablet breakpoint
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct initial state
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <button className='toggle-button' onClick={toggleNavbar}>
        {showNavbar ? 'X' : '≡'}
      </button>
      {showNavbar && <Navbar />}
    </>
  );
};

export default MobileNavbar;