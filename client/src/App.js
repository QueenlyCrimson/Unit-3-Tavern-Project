import React from 'react'
import NavBar from './components/NavBar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import MakeProfile from './pages/MakeProfile'
import MakePost from './components/MakePost'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import SignIn from './components/SignIn'
import UpdateProfile from './components/UpdateProfile'
import Footer from './components/Footer'
import ProfilePage from './components/ProfilePage'
import Feed from './components/Feed'
import { CheckSession } from './services/Auth'


function App() {
  
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    //If a token exists, sends token to localStorage to persist logged in user
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="makeProfile" element={<MakeProfile />} />
          <Route path="makePost" element={<MakePost />} />
          <Route path="signIn" element={<SignIn setUser={setUser}/>} />
          <Route path="about" element={<About />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route index element={<Home />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
