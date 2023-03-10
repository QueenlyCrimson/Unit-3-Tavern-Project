import { useEffect, useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

function ProfilePage({ handleLogOut, userInfo }) {
    let navigate = useNavigate()

    const [userData, setUserData] = useState({})


    const GetUser = async () => {
        const res = await Client.get(`/user/get_user/${userInfo.data.id}`)
        setUserData(res.data)
    }

    const GetPostsByUser = async () => {
        try {
            const userId = userInfo.data.id
            const res = await Client.get(`post/by_user_id/${userId}`)
            console.log(res.data)
            setPosts(res.data)
        } catch (error) {
            throw error
        }
    }
    const handleDelete = async (event) => {
        event.preventDefault()
        handleLogOut()
        await Client.delete(`user/delete_user/${userInfo.data.id}`)
        alert('users account was deleted, please make another user!')
        navigate("/makeProfile")
    }
    const [posts, setPosts] = useState([])
    const handlePosts = async () => {

    }

    useEffect(() => {
        GetUser()
        handlePosts()
        GetPostsByUser()
    }, [userInfo])

    return posts ? (
    <div className='bg-gray-100 h-screen ml-[10rem] w-3/4 flex'>
        <div className='flex md:flex-row-reverse flex-wrap'>
            <div className='w-full p-4 text-center rounded-2xl'>
                <div className='mb-10'>
                    <div className='bg-green p-3 rounded items-start'>
                        <img
                            className='rounded-full'
                            src="https://img.freepik.com/free-icon/user_318-159711.jpg?size=338&ext=jpg"
                            alt="profilePic"
                            width='100' />
                    </div>
                    <div className='text-left pl-4 pt-4">'>
                        <span className="font-light text-[#6B7082] text-2xl mr-2">{userData.userName}</span>
                        <span className="text-base font-semibold text-gray-700 mr-2">
                            <button className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded">Edit Profile</button>
                        </span>
                        <span class="text-base font-semibold text-gray-700">
                            <button className="p-1 border-transparent text-gray-700 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600" aria-label="Notifications">
                                <svg class="h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                        </span>
                    </div>

                    <div className="text-left pl-4 pt-3">
                        <span class="text-base font-semibold text-gray-700 mr-2">
                            <b>220</b> posts
                        </span>
                        <span class="text-base font-semibold text-gray-700 mr-2">
                            <b>114</b> followers
                        </span>
                        <span class="text-base font-semibold text-gray-700">
                            <b>200</b> following
                        </span>
                    </div>

                    <div class="text-left pl-4 pt-3">
                        <span class="text-lg font-bold text-gray-700 mr-2">Sonali Hirave</span>
                    </div>

                    <div class="text-left pl-4 pt-3">
                        <p class="text-base font-medium text-blue-700 mr-2">#graphicsdesigner #traveller #reader #blogger #digitalmarketer</p>
                        <p class="text-base font-medium text-gray-700 mr-2">https://www.behance.net/hiravesona7855</p>
                    </div>


                </div>

                        {/* <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>{userData.name}<span className='font-light text-[#6B7082] ml-2'>{userData.userName}
                        <div>
                            <a href='/updateProfile'>
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
                    </span></h2> */}

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







