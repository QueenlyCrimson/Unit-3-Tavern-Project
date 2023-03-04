import React from 'react'
// import MakePost from './MakePost'
import MakeProfile from '../pages/MakeProfile'

const NavBar = () => {
  return (
    <div className='text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Tavern</h1>
      <MakeProfile />
      {/* <MakePost />s */}
    </div>
  )
}

export default NavBar