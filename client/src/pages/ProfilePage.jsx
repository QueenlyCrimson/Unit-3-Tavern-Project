import { useEffect, useState } from 'react'
import { GetPosts, GetPostsByUser } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'

function ProfilePage ({ user }) {

const GetPostsByUser = async () => {
        try {
        const userId = localStorage.getItem('userId')
          const res = await Client.get(`post/by_user_id/10`)
          console.log(res.data)
          setPosts(res.data)
        } catch (error) {
          throw error
        }
      }

console.log(localStorage.getItem('userId'))
    const [posts, setPosts] = useState([])
    const handlePosts = async () => {

}

    useEffect(() => {
    handlePosts()
    GetPostsByUser()
}, [user])

console.log(posts)
return posts ? (
    <div className='flex-row-reverse w-screen h-screen'>
        <div className='w-[900px] h-screen bg-white mx-auto my-auto rounded-2xl overflow-hidden'>
            <div className=''>
            {/* <img className='top-0 z-10' src={banner} alt=''></img> */}
            </div>
            <div className='relative'>
            {/* <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={pic} alt=''></img> */}
            </div>
            <div className='flex-col  grid  mb-10'>
<div className='bg-green p-3 rounded flex items-start justify-center'>
            <img
            className='rounded-full'
            src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg" 
            alt="profilePic" 
            width='100'/>
</div>
<div className='p-3 text-gray col-span-1'>

</div>
                <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>Chikodi<span className='font-light text-[#6B7082] ml-2'>UserName
                <button link='/updateProfile'className='bg-white ml-3 text-gray-800 px-2 border border-gray-800 rounded'>
                    Edit Profile
                </button>
                </span></h2>
                
                <div className='border mt-[30px]'></div>
                <div className="grid grid-cols-3 px-1 snap-y">
                    {posts.map((post) => (
                        <div className="flex-nowrap py-5 hidden w-100 lg:flex" key={post.id}>
                        <div>
            <img className='flex px-4' src={post.img} alt="post"/>
            </div>
            <p className='font-medium'>{post.likeCount}...</p>
        </div>
        ))}
    </div>
            </div>
        </div>
    </div>
) :(
    <div>
        <h3>TEST!</h3>
    </div>
)
}

export default ProfilePage