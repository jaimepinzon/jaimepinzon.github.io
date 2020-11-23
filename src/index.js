import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from './App.js'

const appTheme = createMuiTheme({
  palette: {
    background: { default: '#f0f3f7' }
  }
})

const ThemedApp = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<ThemedApp />, document.querySelector('#solidRock'))
