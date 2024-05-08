import React from 'react';
import Number from './Number';
import "./Numbers.css";

const Numbers = () => {
  return (
    <div className='number-container'>
        <h2 className='number-heading'>Our <span className='number-details-span'>Numbers</span></h2>
        <div className='number-details'>
            <Number heading={`9.2`} HeadingSpan={`M+`} desc={`Active Users`} />
            <Number heading={`22.3`} HeadingSpan={`M+`} desc={`Assignments`} />
            <Number heading={`130`} HeadingSpan={`K+`} desc={`Oppurtunities`} />
            <Number heading={`800`} HeadingSpan={`+`} desc={`Brand trust us`} />
            <Number heading={`42`} HeadingSpan={`K+`} desc={`Organisations`} />
            <Number heading={`78`} HeadingSpan={`+`} desc={`Countries`} />
        </div>
    </div>
  )
}

export default Numbers