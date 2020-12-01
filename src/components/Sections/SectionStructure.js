import React from 'react'
import { Grid, Typography, withStyles} from '@material-ui/core'

const styles = () => ({
  sectionContainer: {
    width: '100%',
    minHeight: '100%',
    background: '#fafde8',
    flex: '1',
    paddingBottom: 50
  },
  header: {
    padding: [[50, 30, 0]],
    flex: '1'
  },
  content: {
    padding: [[25, 30, 30]]
  },
  title: {
    padding: [[15, 0]],
    color: '#fff'
  },
  subtitle: {
    color: '#fff',
    margin: [[10, 0, 25]],
    fontWeight: 300,
    fontSize: 12,
    maxWidth: 350
  },
  contentContainer: {}
})

const SectionStructure = (props) => {
  const { title, background, children, classes } = props
  return (
    <div className={classes.sectionContainer}>
      <Grid item classes={{ root: classes.header}} style={{ background: background}}>
        <Typography variant={'h2'} classes={{ root: classes.title }}>{title}</Typography>
      </Grid>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

export default withStyles(styles)(SectionStructure)