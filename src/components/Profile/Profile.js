import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      let currentUser = await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/current_user", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(data => (data));
      if(currentUser.current_user) {
        setUser(currentUser.current_user)
      } else {
        console.log('wrong', currentUser)
      }
    };

    getUser()
  }, [])

  return (
    <div>
      <h1>Profile page!</h1>
      {user && (
        <div>
          {user.display_name}
          {user.email}
          {user.first_name}
          {user.last_name}
          {user.roles[0].name}
          {console.log(user)}
        </div>
      )}
    </div>
  )
}

export default Profile
