import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/post/get_posts')
    // console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostsByUser = async () => {
  try {
    const userId = localStorage.getItem('userId')
    const res = await Client.get(`post/post/${userId}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetComments = async (data) => {
  try {
    const res = await Client.get(`/comment/find_comments/by_postId/${data}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreatePost = async (data) => {
  try {
    const res = await Client.post('post/create_posts', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (data) => {
  try {
    const res = await Client.post('comment/create_comment', data)
    return res.data
  } catch (error) {
    throw error
  }
}
