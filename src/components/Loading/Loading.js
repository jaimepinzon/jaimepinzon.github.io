import React from 'react'
import { CircularProgress, withStyles, Typography } from '@material-ui/core'

const styles = theme => ({
  text: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    textAlign: 'center',
    fontSize: 20,
    margin: [[25, 'auto']],
    color: '#fff'
  },
  progress: {
    maxWidth: 120,
    margin: [[0, 'auto']],
    color: 'orange'
  },
  container: {
    textAlign: 'center'
  }
})

const Loading = (props) => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <Typography classes={{ root: classes.text }}>LOADING</Typography>
      <CircularProgress classes={{ root: classes.progress }} />
    </div>
  )
}

export default withStyles(styles)(Loading)
