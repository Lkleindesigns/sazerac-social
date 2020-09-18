import React, { createContext, useState, useEffect, useMemo, useContext} from 'react'
import axios from 'axios'

export const AuthDataContext = createContext(null)

const initialAuthData = {}

const AuthDataProvider = (props) => {
  const [authData, setAuthData] = useState(initialAuthData)

  useEffect(() => {

    async function checkUser() {
      const currentAuthData = await axios.get(`${process.env.REACT_APP_SAZERAC_SOCIAL_API_BASE_URL}/current_user`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })

      if(currentAuthData.data.logged_in) {
        setAuthData(currentAuthData.data)
      }
    }

    checkUser()
  }, [])


  const onLogout = () => setAuthData(initialAuthData)

  const onLogin = newAuthData => setAuthData(newAuthData)

  const authDataValue = useMemo(() => ({...authData, onLogin, onLogout }), [authData])

  return <AuthDataContext.Provider value={authDataValue} {...props} />
}

export const useAuthDataContext = () => useContext(AuthDataContext)

export default AuthDataProvider
