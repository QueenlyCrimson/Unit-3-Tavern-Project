
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import Client from '../services/api'

const ViewComments = () => {
  const [comments, setComments] = useState([])
  let { id } = useParams()
  console.log(id)
  
  useEffect(() => {
    

  const handleComments = async () => {
    const res = await Client.get(`/comment/find_comments/by_postId/${id}`)
    console.log(res.data)
    setComments(res.data)
    
  }
  handleComments()
}, [id])



  return comments ? (
  <div className='h-screen pt-10'>
    <div className='grid justify-center h-auto'>
    
      <div className='mt-5 md:col-span-2  rounded  border w-full md:mx-0 lg:mx-0 bg-white px-[2rem] py-[2rem]'>
      <div className='flex'>
        <Link to={'/feed'}><AiOutlineArrowLeft size={25} className='hover:text-orange-500 flex' /></Link>
        <span className='text-xl pb-2 px-2'>Comments</span>
      </div>

      {comments.map((comment) => (
        <div className='flex border-b-2 mb-2 py-2' key={comment.id}>
            <img className="w-10 h-10 mr-2 object-cover rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" alt='profile-pic'/>
            <p><span className='font-medium mr-2 pl-2'>NellyNel520</span>{comment.content}</p>

        </div>
      ))}

        {/* <div className='flex border-b-2 mb-2 py-2'>
            <img className="w-10 h-10 mr-2 object-cover rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" alt='profile-pic'/>
            <p><span className='font-medium mr-2 pl-2'>NellyNel520</span>Section where 1st two comments are being shown replace with comment username and comment content</p>

        </div> */}


        

      </div>

    </div>
  </div>
  ) : null
}

export default ViewComments


