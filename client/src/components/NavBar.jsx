import React from 'react'

const NavBar = () => {
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tavern</h1>
      <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Register</li>
        <li className='p-4'>SignIn</li>
        <li className='p-4'>About</li>
      </ul>
    </div>
  )
}

export default NavBar