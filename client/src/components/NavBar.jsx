import React, {useState} from 'react'
import {AiOutlineClose, AioutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tavern</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Register</li>
        <li className='p-4'>SignIn</li>
        <li className='p-4'>About</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={30}/> }
   
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-{60%} h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Tavern</h1>

        <ul className='uppercase p-4 '>
        <li className='p-4 border-b border-gray-600' border-b>Home</li>
        <li className='p-4 border-b border-gray-600'>Register</li>
        <li className='p-4 border-b border-gray-600'>SignIn</li>
        <li className='p-4'>About</li>
        </ul>
      </div>


    </div>
  )
}

export default NavBar