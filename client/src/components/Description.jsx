import React from 'react'
import Logo from '../assets/logo.png'

const Description = () => {
  return (
    <div className='w-full bg-grey py-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='q-[500px] mx-auto my-4' src={Logo} alt="/"/> 
        <div className='flex flex-col justify-center'>
          <p className='text-[#e57626] font-bold'>THE ULTIMATE SOCIAL MEDIA APP</p>
          <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold py-2'>Connect with Like-Minded Individuals Across the World </h1>
          <p>Whether you're a foodie, gamer, fitness enthusiast, or fashionista, Tavern has something for everyone. With its user-friendly interface, Tavern allows you to create a personalized profile that showcases your unique personality and interests.</p>
          <button ahref="/makeProfile" className='bg-[#e57626] w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-black'>Register Now!</button>
        </div>
      </div>
    </div>
  )
}

export default Description