import React from 'react'
import SectionStructure from './SectionStructure'
import GalleryModel from '../GalleryModel/GalleryModel'
import { Grid, withStyles } from '@material-ui/core'
import { historiaGallery } from '../../constants/historia'

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
        <GalleryModel model={historiaGallery}/>
      </Grid>
    </SectionStructure>
  )
}

export default withStyles(styles)(Historia)