import React from 'react'
import NavBar from './components/NavBar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import MakeProfile from './pages/MakeProfile'
import MakePost from './components/MakePost'
import Home from './pages/Home'
import SignIn from './components/SignIn'
import UpdateProfile from './components/UpdateProfile'
import Footer from './components/Footer'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="makeProfile" element={<MakeProfile />} />
          <Route path="makePost" element={<MakePost />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="about" element={<About />} />
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
