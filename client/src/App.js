
import React from "react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MakeProfile from "./pages/MakeProfile";
import MakePost from "./components/MakePost";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import UpdateProfile from "./components/UpdateProfile";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import Feed from "./components/Feed";
import { CheckSession } from "./services/Auth";
import ForgotPassword from './pages/ForgotPassword'


function App() {
  const [user, setUser] = useState(null)

  const navigate = useNavigate();

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

  const handleLogOut = () => {

    setUser(null);
    localStorage.clear();
    navigate("/");
  };


  return (
    <div className="App">
      <NavBar user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="makeProfile" element={<MakeProfile />} />
          <Route path="makePost" element={<MakePost user={user} />} />
          <Route path="signIn" element={<SignIn setUser={setUser} />} />
          <Route path="about" element={<About />} />
          <Route path="feed" element={<Feed user={user} />} />
          <Route index element={<Home />} />
          <Route path="updateProfile" element={<UpdateProfile />} />
          <Route path="profile" element={<ProfilePage user={user} />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
