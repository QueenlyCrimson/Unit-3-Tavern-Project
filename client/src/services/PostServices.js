import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/post/get_posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostsByUser = async (data) => {
  try {
    const res = await Client.get(`post/post/${data}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
