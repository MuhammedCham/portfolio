import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow}  className='h-4 w-4 object-contain'/>
        </Link>
    </div>
)
const renderContent =  {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '>Salam, I am <span className='font-semibold'>Muhammed</span> 👋
        <br />
            A Software Engineer from Gambia
        </h1>
    ),
    2:(
        <InfoBox 
            text="Worked with many companies and picked up many skills along the way"
            link="/about"
            btnText="Learn more"
        />
    ),
    3:(
        <InfoBox 
            text="Are you curious about successful projects I have led?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox 
            text="Need a project done or looking for a dev? I am just few keystrokes away."
            link="/contact"
            btnText="Contact me"
        />
    ),
}


const Homeinfo = ({ currentStage }) => {
  return (
    renderContent[currentStage] || null
  )
}

export default Homeinfo