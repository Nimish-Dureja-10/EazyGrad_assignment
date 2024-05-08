import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-left'>
        <h2 className='about-title'>
          Host Your Own <br/><span>
            Oppurtunity
          </span>
        </h2>
        <p>
          Engage with a diverse talent pool or hire the best minds from <br/> 9.2Mn+ users.
        </p>
        <div className='about-left-button'>
          <button className='host-button'>Host Now!</button>
          <button className='know-button'>Know More</button>
        </div>
      </div>
      <div className='about-right'>
        <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/65799cfe6d841_frame_1000012421.png?d=796x782' alt='' />
      </div>
    </div>
  )
}

export default About