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
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
