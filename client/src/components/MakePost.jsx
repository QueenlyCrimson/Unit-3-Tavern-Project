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
    <div className="flex-row h-screen m-8 mt-24">
      <h1 className="text-white w-full text-center p-8 text-2xl font-bold">
        Make a Post!
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-md px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="">
              <h3 className="text-2xl font-medium leading-6 text-orange-500">
                Hey(username),
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Wh
              </p>
            </div>
            <div className="mt-1 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="img"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-[#e57626] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#c66c2c] focus-within:ring-offset-2 hover:text-[#e99253]"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Caption
                  </label>
                  <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="Whats on your mind!"
                        defaultValue={' '}
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
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  )
}

export default MakePost
