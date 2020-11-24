import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App.js'

const appTheme = createMuiTheme({
  palette: {
    background: { default: '#f0f3f7' }
  },
  typography: {
    fontFamily: 'Merriweather',
    h6: {
      fontWeight: 700,
      fontFamily: 'Montserrat'
    },
    h1: {
      fontFamily: 'Montserrat',
      fontSize: 55
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: 40
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Montserrat',
        textTransform: 'none'
      }
    }
  },
})

const ThemedApp = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<ThemedApp />, document.querySelector('#solidRock'))
