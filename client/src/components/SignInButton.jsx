import { Link, useNavigate } from "react-router-dom"

const SignInButton =  ({ user, handleLogOut }) => {



  return user ? (
    <li className='p-4 hover:text-orange-500' onClick={handleLogOut}><Link to="/">SignOut</Link></li>
  ) : (
    <li className='p-4 hover:text-orange-500'><Link to="/signIn">SignIn</Link></li>
  )
}

export default SignInButton