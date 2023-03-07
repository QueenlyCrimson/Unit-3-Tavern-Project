import { useEffect, useState } from 'react'
import { GetPostsByUser } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

function ProfilePage ({ user }) {

    const [posts, setPosts] = useState([])
    console.log('post is', posts)
    let navigate = useNavigate()


    useEffect(() => {
        const handlePosts = async () => {
        const data = await GetPostsByUser()
        setPosts(data)
    }
    handlePosts()
})
return (
    <div className='flex-row-reverse w-screen h-screen'>
        <div className='w-[1000px] h-screen bg-white mx-auto my-auto rounded-2xl overflow-hidden'>
            <div className=''>
            {/* <img className='top-0 z-10' src={banner} alt=''></img> */}
            </div>
            <div className='relative'>
            {/* <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={pic} alt=''></img> */}
            </div>
            <div className='flex-col'>
                <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>Chikodi Merenu <span className='font-light text-[#6B7082] ml-2'>UserName</span></h2>
                <div className='border mt-[40px]'></div>
                <div className="grid col-4">
                    {posts.map((post) => (
                        <div className="profilePageCard" key={post.id}>
                            {/* <h3>{post.userName}</h3> */}
                        <div>
            <img src={post.img} alt="post" className='flex'/>
            </div>
            <p>{post.content}...</p>
        </div>
        ))}
    </div>
            </div>
        </div>
    </div>
)
}

export default ProfilePage