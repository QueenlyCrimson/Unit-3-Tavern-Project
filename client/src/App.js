import React from 'react'
import NavBar from './components/NavBar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import MakeProfile from './pages/MakeProfile'
import MakePost from './components/MakePost'
import Home from './pages/Home'
import SignIn from './components/SignIn'

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
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
