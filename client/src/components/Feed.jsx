import { useEffect, useState } from 'react'
import { GetPosts } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

export default function Feed({ user }) {

  const [posts, setPosts] = useState([])
  console.log('post is', posts)
  let navigate = useNavigate()

  useEffect(() => {
    const handlePosts = async () => {
      const data = await GetPosts()
      setPosts(data)
    }
    handlePosts()
  }, [user])

  return user ? (
    
    <div className="grid col-4 ">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h3>{post.userName}</h3>
          <div>
            <img src={post.img} alt="post" />
          </div>
          <p>{post.content}...</p>
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
          <button className=' w-full justify-center rounded-md mx-3 md:mx-0 lg:mx-0 text-xl bg-orange-500 mt-4 py-2 px-3' onClick={() => navigate('/signin')}>Sign In</button>
      </div>
    </div>
  )
}
