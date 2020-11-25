import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Grid, withStyles } from '@material-ui/core'
import { AppContext } from './context/AppContext'
import AppBar from './components/AppBar/AppBar'
import AppContent from './components/AppContent/AppContent'
import Footer from './components/Footer/Footer'

const styles = theme => ({
  appContainer: {
    background: theme.palette.background.default,
    minheight: '100%',
    flexWrap: 'nowrap'
  },
  appContent: {
    flex: 1,
    width: '100%',
    maxWidth: '90%',
    margin: [[0, 'auto']]
  }
})

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { classes, config } = this.props
    const contextValues = {
      config
    }

    return (
      <Router>
        <AppContext.Provider value={contextValues}>
          <Grid container alignItems={'center'} justify={'center'} direction={'column'} classes={{ root: classes.appContainer }}>
            <AppBar />
            <AppContent/>
            <Footer />
          </Grid>
        </AppContext.Provider>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
