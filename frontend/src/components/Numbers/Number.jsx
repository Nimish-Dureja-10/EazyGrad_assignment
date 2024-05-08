import React from 'react'
import "./Numbers.css";

const Number = ({heading,HeadingSpan,desc}) => {
  return (
    <div className='number-details-inner'>
        <h4 className='number-details-heading'>{heading}<span className='number-details-span'>{HeadingSpan}</span></h4>
        <p className='number-details-p'>{desc}</p>
    </div>
  )
}

export default Number