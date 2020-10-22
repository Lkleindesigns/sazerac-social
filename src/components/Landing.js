import React from 'react'

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
    <>
      <div>
        <div>Component 1</div>
        <div>Component 2</div>
        <div>Component 3</div>
      </div>
    </>
  )
}

export default Landing
