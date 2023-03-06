import React from 'react'
import AboutCards from '../components/AboutCards'
import Description from '../components/Description'


const About = () => {
  return (
    <div className='text-white'>
      <h1 className='w-full text-3xl font-bold text-center'>About Us</h1>
      <Description />
      <AboutCards />
      
    </div>
  )
}

export default About
