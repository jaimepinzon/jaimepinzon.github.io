import React from 'react'
import SectionStructure from './SectionStructure'
import TextInterpreter from '../TextInterpreter/TextInterpreter'
import { Grid, withStyles } from '@material-ui/core'
import { historia } from '../../constants/historia'

const styles = () => ({
  contentContainer: {
    padding: [[10, 30]],
    maxWidth: 800,
    margin: [[0, 'auto']]
  }
})

const Historia = (props) => {
  const { classes } = props
  return (
    <SectionStructure {...props}>
      <Grid container classes={{root: classes.contentContainer}}>
        <TextInterpreter text={historia} />
      </Grid>
    </SectionStructure>
  )
}

export default withStyles(styles)(Historia)