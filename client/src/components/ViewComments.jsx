
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const ViewComments = () => {



  return (
  <div className='h-screen pt-10'>
    <div className='grid justify-center h-auto'>
    
      <div className='mt-5 md:col-span-2  rounded  border w-full md:mx-0 lg:mx-0 bg-white px-[2rem] py-[2rem]'>
      <AiOutlineArrowLeft />
      <h1 className='text-xl pb-2'>Comments</h1>

        <div className='flex border-b-2 mb-2 py-2'>
            <img className="w-10 h-10 mr-2 object-cover rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" alt='profile-pic'/>
            <p><span className='font-medium mr-2 pl-2'>NellyNel520</span>Section where 1st two comments are being shown replace with comment username and comment content</p>

        </div>

        <div className='flex border-b-2 mb-2 py-2'>
            <img className="w-10 h-10 mr-2 object-cover rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" alt='profile-pic'/>
            <p><span className='font-medium mr-2 pl-2'>NellyNel520</span>Section where 1st two comments are being shown replace with comment username and comment content</p>

        </div>

        

      </div>

    </div>
  </div>
  )
}

export default ViewComments


