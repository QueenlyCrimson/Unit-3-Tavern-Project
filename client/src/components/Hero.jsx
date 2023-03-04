import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
      <p className='text-[#d98345] font-bold p-2'>THE ULTIMATE SOCIAL MEDIA APP</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Connect with Tavern</h1>
      <div>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold'>For everyone whether you're a  </p>
        <Typed strings={[
          'Foodie',
          'Gamer',
          'Fitness Enthusiast', 
          'Fashionista'
        ]} 
        typeSpeed={60}
        backSpeed={20}
        loop
        />
      </div>
      </div>
    </div>
  )
}

export default Hero