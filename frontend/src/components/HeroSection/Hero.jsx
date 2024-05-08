import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-title'>
        <h1 className='title'><span className='hero-span'>Unlock</span> Your Career</h1>
        <p>Explore opportunities from across the globe to learn, <br />
        showcase skills, gain CV points & get hired by your dream company.</p>
        <button className='hero-button'>Go Pro!</button>
      </div>
      <div className='hero-images'>
        <div className='images-section1'>
          <img src='https://files.codingninjas.in/article_images/custom-upload-1671512689.webp' alt='' />
          <img src='https://media.licdn.com/dms/image/D5612AQEB9ojqNMqdyQ/article-cover_image-shrink_600_2000/0/1683796312613?e=2147483647&v=beta&t=OY9RT8eW9_OH2iC2tPNV5naC9l122TvAtN0kpzcLyFw' alt='' />
          <img src='https://miro.medium.com/v2/resize:fit:1200/0*mV4wj0Fq_6uF6rPG.jpg' alt=''/>
        </div>
        <div className='images-section2'>
          <img src='https://static.wixstatic.com/media/99bfb4_678ecf0800af4a848b59d166b938ff8b~mv2.jpg/v1/fit/w_2500,h_1330,al_c/99bfb4_678ecf0800af4a848b59d166b938ff8b~mv2.jpg' alt=''/>
          <img src='https://www.hrkatha.com/wp-content/uploads/2018/08/ac2e849b4a428fbab1a3915044f21521.jpg' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Hero