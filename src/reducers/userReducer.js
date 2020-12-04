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
    const user = await userService.getUser()
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
    await userService.register(credentials)
    await userService.login({ email: credentials.email, password: credentials.password })
    const user = await userService.getUser()
    dispatch({
      type: "REGISTER",
      user
    })
  }
}

const userReducer = (state = initialState, action) => {
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

export default userReducer