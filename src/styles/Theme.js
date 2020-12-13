import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import amber from '@material-ui/core/colors/amber'
import teal from '@material-ui/core/colors/teal'
import {useSelector} from 'react-redux'

const Theme = (props) => {
  const mode = useSelector(state => state.theme)

  const theme = createMuiTheme({
    palette: {
      type: mode ? "light" : "dark",
      primary: {
        main: amber[200]
      },
      secondary: {
        main: teal[200]
      },
    }
  })


  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const withTheme = (Component) => {
  return (props) => {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    )
  }
}