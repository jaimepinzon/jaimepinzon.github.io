import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App.js'

const appTheme = createMuiTheme({
  palette: {
    background: { default: '#B69679' }
  },
  typography: {
    fontFamily: 'Merriweather, serif',
    h6: {
      fontWeight: 700,
      fontFamily: 'Montserrat, Roboto, Verdana, sans-serif'
    },
    h1: {
      fontFamily: 'Montserrat, Roboto, Verdana, sans-serif',
      fontSize: 55
    },
    h2: {
      fontFamily: 'Montserrat, Roboto, Verdana, sans-serif',
      fontSize: 40
    },
    h4: {
      fontFamily: 'Montserrat, Roboto, Verdana, sans-serif',
      fontSize: 30
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Montserrat, Roboto, Verdana, sans-serif',
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
