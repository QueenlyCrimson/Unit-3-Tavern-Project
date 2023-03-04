import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'

const MakePost = () => {
  let navigate = useNavigate()
  const initialState = {
    userName: '',
    content: '',
    img: '',
    likeCount: '',
    userId: sessionStorage.getItem('user')
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sessionStorage.getItem('user')) {
      // await Post.post('/api/coaster', formState)
      setFormState(initialState)
      navigate('/')
    }
  }

  return (
    <div className="m-8 mt-24">
      <h1 className="text-black w-full text-center p-8 text-2xl font-bold">
        Make a Post!
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Post!
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Whats on your mind
              </p>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content
                  </label>
                  <input
                    type="text"
                    name="content"
                    id="content"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.name}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="img"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    name="img"
                    id="img"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={handleChange}
                    value={formState.image}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to={'/'}>
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default MakePost
