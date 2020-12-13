const initialState = true

export const toggleTheme = () => {
  return async dispatch => {
    console.log('action')
    dispatch({
      type: "TOGGLE_THEME",
    })
  }
}

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case "TOGGLE_THEME":
      return !state;
    default:
      return state
  }
}

export default themeReducer