import React from 'react'
import { CircularProgress, withStyles, Typography } from '@material-ui/core'

const styles = theme => ({
  text: {
    textAlign: 'center',
    fontSize: 18,
    margin: [[25, 'auto']],
    color: theme.palette.primary.main
  },
  progress: {
    maxWidth: 120,
    margin: [[0, 'auto']]
  }
})

const Loading = (props) => {
  const { classes } = props
  return (
    <div>
      <Typography classes={{ root: classes.text }}>Loading</Typography>
      <CircularProgress classes={{ root: classes.progress }} />
    </div>
  )
}

export default withStyles(styles)(Loading)
