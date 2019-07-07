import React, { useEffect, useState } from 'react'
import { getUser } from '../../helpers/userHelpers'

const Profile = (props) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    getUser().then(data => setUser(data))
  },[])

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
        </div>
      )}
    </div>
  )
}

export default Profile
