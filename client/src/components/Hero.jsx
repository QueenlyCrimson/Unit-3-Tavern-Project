import React, { useEffect } from 'react'
import Typed from 'react-typed'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
        <p className='text-[#e57626] font-bold p-2'>THE ULTIMATE SOCIAL MEDIA APP</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Connect with Tavern</h1>
        <div className='flex justify-center'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold'>For everyone whether you're a  </p>
          <Typed className='text-[#e57626] md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={[
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
        <p className='md:text-2xl text-xl font-bold text-gray-500 py-4'>Create a personalized profile that showcases your unique personality and interests.</p>
        <button className='bg-[#e57626] w-[200px] rounded-md my-6 mx-auto py-3 text-black' ><NavLink to='MakeProfile'>Sign Up!</NavLink></button>
      </div>
    </div>
  )
}

export default Hero