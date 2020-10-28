import userService from '../services/user'

const initialState = null

export const loginUser = (credentials) => {
  return async dispatch => {
    try {
      await userService.login(credentials)
      const user = await userService.getUser()
      dispatch({
        type: "LOGIN",
        user
      })
    } catch (exception) {
      console.log(exception)
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    await userService.logout()
    dispatch({
      type: "LOGOUT"
    })
  }
}

export const checkUserSession = () => {
  return async dispatch => {
    const user = await userService.checkUser()
    if (user) {
      dispatch({
        type: "LOGIN",
        user
      })
    }
  }
}

export const registerUser = (credentials) => {
  return async dispatch => {
    
    const newUser = await userService.register(credentials)
    console.log(newUser)
    const login = await userService.login({email: credentials.email, password: credentials.password})
    console.log(login)
    const user = await userService.getUser()
    console.log(user)
   dispatch({
     type: "REGISTER",
     user
   })
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN": 
      return action.user
    case "LOGOUT":
      return initialState
    case "REGISTER":
      return action.user
    default:
      return state
  }
}