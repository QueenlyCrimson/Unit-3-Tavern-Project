import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('auth/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    const userInfo = await Client.get(
      `user/get_user/by_password/${res.data.data.password}`
    )
    localStorage.setItem('userId', userInfo.data.id)
    localStorage.setItem('name', userInfo.data.name)
    localStorage.setItem('userName', userInfo.data.userName)

    return res.data.data
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
