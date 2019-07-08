import React, { createContext, useState, useEffect, useMemo, useContext } from "react";

const AuthDataContext = createContext(null)

const initialAuthData = {}

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData)

  useEffect(() => {
    async function getAuth(){
      let currentAuthData = await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/logged_in", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => (data))
        .catch(error => console.error("Error:", error));

        if(currentAuthData) {
          setAuthData(currentAuthData)
        }
    };
    getAuth()
  },[])

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = newAuthData => setAuthData(newAuthData);

  const authDataValue = useMemo(() => ({ ...authData, onLogin, onLogout }), [authData]);
  return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

export default AuthDataProvider;