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

export const GetComments = async (data) => {
  try {
    const res = await Client.get(`/comment/find_comments/by_postId/${data}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}