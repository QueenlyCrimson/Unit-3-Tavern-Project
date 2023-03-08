import { useEffect, useState } from 'react'
import { GetPostsByUser } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'


function ProfilePage ({ user }) {
console.log(user)
console.log(localStorage.getItem('userId'))
const userId = localStorage.getItem('userId')
    const [posts, setPosts] = useState([])
    // console.log('post is', posts)
    let navigate = useNavigate()

    // const [userId, setuserId] = useState([])
    const handlePosts = async () => {
    const data = await GetPostsByUser(userId)
    // console.log(data)
    setPosts(data)
}

    useEffect(() => {
    handlePosts()
}, [user])
return posts ? (
    <div className='flex-row-reverse w-screen h-screen'>
        <div className='w-[1000px] h-screen bg-white mx-auto my-auto rounded-2xl overflow-hidden'>
            <div className=''>
            {/* <img className='top-0 z-10' src={banner} alt=''></img> */}
            </div>
            <div className='relative'>
            {/* <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={pic} alt=''></img> */}
            </div>
            <div className='flex-col'>
                <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>{}<span className='font-light text-[#6B7082] ml-2'>UserName
                </span></h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                <div className='border mt-[30px]'></div>
                <div className="grid grid-cols-3 px-2">
                    {posts.map((post) => (
                        <div className="flex-row py-5 hidden w-100 lg:flex" key={post.id}>
                        <div>
            <img className='flex' src={post.img} alt="post"/>
            </div>
            {/* <p>{post.content}</p> */}
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