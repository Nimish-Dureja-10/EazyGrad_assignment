import React from 'react'
import "./LevelUp.css";

const LevelUp = () => {
  return (
    <div className='level-up'>
        <div className='level-up-left'>
            <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/65799bf7b8ae5_frame_1000013237.png?d=1104x886' alt='' />
        </div>
        <div>
            <div className='level-up-right'>
                <h2>Learn & <br/> <span>Level Up Your Skills</span></h2>
                <p>Select from a wide range of courses to upskill and advance your career!</p>
                <button>Explore Courses! <i class="fa-solid fa-arrow-up-right fa-2xl" style={{color:"white"}}></i></button>
            </div>
        </div>
    </div>
  )
}

export default LevelUp