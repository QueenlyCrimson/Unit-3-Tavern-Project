
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import { CreateComment } from '../services/PostServices'


const MakeComment = ({ userInfo }) => {


  let { postId } = useParams()
  const userName = userInfo.name
  const userId = userInfo.id

  let newPostId = parseInt(postId)

  console.log(userName)





  let navigate = useNavigate()
  let initialState = {
    name: userName,
    content: '',
    userId: userId,
    postId: postId
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()

    await CreateComment({
      name: userName,
      content: formValues.content,
      userId: userId,
      postId: newPostId
    })
    setFormValues(initialState)
    navigate('/feed')
  }


  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value })
  }
  useEffect(() => {

  }, [])


  return (
    <div className='grid justify-center'>

      <div className="m-8 h-screen max-w-md justify-center">
        <h1 className="text-white w-full text-center p-5 text-2xl font-bold">
          Make a Comment!
        </h1>
        <form onSubmit={handleSubmit} className=" py-12 px-4  space-y-6">
          <div className="bg-white rounded-md px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div className="grid gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Hey {userName},
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Would you like to make a comment on this post?
                </p>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid gap-6">
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comment
                      </label>
                      <input
                        type='text'
                        id="content"
                        name="content"
                        rows={3}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:py-1.5 sm:text-sm sm:leading-6 p-1"
                        placeholder="Whats on your mind!"
                        defaultValue={''}
                      />

                    </div>
                  </div>
                </div>



                <div className="flex  py-3 justify-center">
                  <Link to='/'>
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="ml-3 rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MakeComment
