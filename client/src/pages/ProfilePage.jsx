import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

function ProfilePage({ user, handleLogOut }) {
    let navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({})

    const userId = localStorage.getItem('userId')

    const GetUser = async () => {
        const res = await Client.get(`/user/get_user/${userId}`)
        setUserInfo(res.data)
    }

    const GetPostsByUser = async () => {
        try {
            const res = await Client.get(`post/by_user_id/41`)
            setPosts(res.data)
        } catch (error) {
            throw error
        }
    }
    const handleDelete = async (event) => {
        event.preventDefault()
        await Client.delete(`user/delete_user/${userId}`)
        alert('users account was deleted, please make another user!')
        handleLogOut()
        navigate("/makeProfile")
    }
    const [posts, setPosts] = useState([])
    const handlePosts = async () => {

    }

    useEffect(() => {
        GetUser()
        handlePosts()
        GetPostsByUser()
    }, [user])

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
                            width='100' />
                    </div>
                    <div className='p-3 text-gray col-span-1'>

                    </div>
                    <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>{userInfo.name}<span className='font-light text-[#6B7082] ml-2'>{userInfo.userName}
                        <div>
                            < a href='/updateProfile'>
                                <button className='bg-white ml-3 text-gray-800 px-2 border border-gray-800 rounded'>
                                    Edit Profile
                                </button>
                            </a>

                            <button
                                type='submit'
                                onClick={handleDelete}
                                className='bg-white ml-3 text-gray-800 px-2 border border-gray-800 rounded'>
                                Delete User
                            </button>

                        </div>
                    </span></h2>

                    <div className='border mt-[30px]'></div>
                    <div className="grid grid-cols-3 px-1 snap-y">
                        {posts.map((post) => (
                            <div className="flex-nowrap py-5 hidden w-100 lg:flex" key={post.id}>
                                <div>
                                    <img className='flex px-4' src={post.img} alt="post" />
                                </div>
                                <p className='font-medium'>{post.likeCount}...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <h3>TEST!</h3>
        </div>
    )
}

export default ProfilePage