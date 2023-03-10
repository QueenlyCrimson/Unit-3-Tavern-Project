import React from 'react'
import AboutCards from '../components/AboutCards'
import Description from '../components/Description'
// import AboutCards2 from '../components/'


const About = () => {
  return (
    <div className='text-white'>
      <h1 className='w-full text-5xl font-bold text-center pt-4 font-Playfair'>About Us</h1>
      <Description />
      <AboutCards />

      
    </div>
  )
}

export default About
