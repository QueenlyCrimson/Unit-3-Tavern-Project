import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import Client from '../services/api'

const ViewComments = () => {

  const [comments, setComments] = useState([])
  const [userId, setUserId] = useState([])


  let { id } = useParams()



  const handleComments = async () => {
    const res = await Client.get(`/comment/find_comments/by_postId/${id}`)
    setComments(res.data)
    setUserId(res.data.userId)
  }
  useEffect(() => {
    handleComments()
  }, [id])

  const deleteComment = async (event, commentId) => {
    event.preventDefault()
    const res = await Client.delete(`/comment/delete_comment/${commentId}`)
    window.alert('Success! Comment was deleted')
    handleComments()

  }

  return comments ? (
    <div className='h-screen pt-10'>
      <div className='grid justify-center h-auto'>

        <div className='mt-5 md:col-span-2  rounded w-full md:mx-0 lg:mx-0 bg-[#1b1414] px-[2rem] py-[2rem]'>
          <div className='flex'>
            <Link to={'/feed'}><AiOutlineArrowLeft size={25} className='text-white hover:text-orange-500 flex' /></Link>
            <span className='text-white text-xl pb-2 px-2'>Comments</span>
          </div>

          {comments.map((comment) => (
            <div className='border-b-2 mb-2 py-2' key={comment.id} id={comment.id}>

              <div className='flex ' >


                <img className="w-10 h-10 mr-2 object-cover rounded-full" src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" alt='profile-pic' />
                <p className='text-white'><span className='text-gray-500 font-medium mr-2 pl-2'>{comment.name}</span>{comment.content}</p>
              </div>

              <div className='flex pt-2 justify-between'>
                <span className="text-sm text-gray-400 font-medium">{comment.likeCount} Likes</span>
                <div id={comment.id} className="flex pl-4">
                  <div>
                    <svg className='fill-white hover:fill-red-500' fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                  </div>

                  <button type="button"
                    onClick={(event) => deleteComment(event, comment.id)}><BsFillTrashFill id={comment.id} className='fill-white  hover:fill-orange-500' size={25} /></button>


                </div>
              </div>

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