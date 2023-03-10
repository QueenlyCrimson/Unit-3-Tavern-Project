import { useEffect, useState } from 'react'
import { GetPosts } from '../services/PostServices'

import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Client from '../services/api'


function Feed({ user }) {

  const [posts, setPosts] = useState([])
  const [userId, setUserId] = useState([])

  let navigate = useNavigate()

  const deletePost = async (event, postId) => {

    const res = await Client.delete(`/post/${postId}`)
    window.alert('Success! Post was deleted')
    handlePosts()
  }

  const handlePosts = async () => {
    const data = await GetPosts()
    setPosts(data)
  }
  useEffect(() => {
    handlePosts()
  }, [user])

  return user ? (
    <div className="grid">
      {posts.map((post) => (
        <div className="rounded overflow-hidden  w-full my-4 lg:w-6/12  text-white mx-3 md:mx-0 lg:mx-[20rem]" key={post.id}>
          <div className='w-full flex justify-between p-3'>
            <div className='flex'>
              {/* user profile image */}
              <div className='rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden'>
                <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" alt="profilePic" />
              </div>
              <span className='pt-1 ml-2 font-bold text-sm'>{post.userName}</span>
            </div>
          </div>

          <img className='w-full bg-cover rounded' src={post.img} alt="post" />

          <div className="flex items-center justify-between mx-4 mt-3 mb-2">
            <div className="flex gap-5">

              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24" className='fill-white  hover:fill-red-500'><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
              <Link to={`/makeComment/${post.id}`}>
                <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24" className='fill-white hover:fill-orange-500'><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
              </Link>

              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24" className='fill-white  hover:fill-blue-500'><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>

              <button type="button"
                onClick={(event) => deletePost(event, post.id)}><BsFillTrashFill id={post.id} className='hover:fill-orange-500' size={25} /></button>

            </div>
            <div className="flex">
              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24" className='fill-white  hover:fill-yellow-500'><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
            </div>
          </div>
          <div className='px-3 pb-2'>
            <div className='pt-2'>
              {/* Like count need to add like button beside count */}
              <span className="text-sm text-gray-400 font-medium">{post.likeCount} Likes</span>
            </div>
            <div className='pt-1'>
              <div className='mb-2 text-sm'>
                <span className='font-medium mr-2'>{post.userName}</span>{post.content}
              </div>
            </div>
            <Link to={`postComments/${post.id}`}><div className='text-sm mb-2 text-gray-400 cursor-pointer font-medium  hover:text-orange-500'>View all comments</div></Link>
            <div className='mb-2'>
              <div className='mb-2 text-sm'>
                {/* section where 1st two comments are being shown replace with comment username and comment content */}
                {/* need comment component with back button to post that maps all comments for that post */}
                <p><span className='font-medium mr-2'>{post.userName}</span>{post.content}</p>
              </div>
            </div>

          </div>





        </div>
      ))}
    </div>
  ) : (
    <div className='h-[40rem]'>
      <div className="protected grid  items-center justify-center  px-4 py-[10rem] sm:px-6 lg:px-8">
        <div className='rounded-md overflow-hidden border w-full text-center bg-white py-[3rem] mx-3 md:mx-0 lg:mx-0'>
          <h3 className='text-5xl pb-4 text-orange-500 font-bold font-Playfair'>Ooops!</h3>
          <h3 className='text-2xl'>You must be signed in to do that!</h3>
        </div>
        <button className=' w-full justify-center rounded-md mx-3 md:mx-0 lg:mx-0 text-xl bg-orange-500 mt-4 py-2 px-3 hover:bg-orange-300' onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    </div>
  )
}

export default Feed