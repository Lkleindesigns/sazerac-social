import React from 'react'
import Login from './Login'
import { logoutUser } from '../actions/userHelpers'
import { useAuthDataContext } from '../actions/AuthDataProvider'


const Landing = () => {
  
  const { current_user, logged_in, onLogout } = useAuthDataContext();

  const handleLogout = () => {
    logoutUser()
    onLogout()
  }

  if(!logged_in) {
    return <Login />
  }

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <p>Hello {current_user.first_name} {current_user.last_name} </p>
    </div>
  )
}

export default Landing
