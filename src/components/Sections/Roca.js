import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import SectionStructure from './SectionStructure'
import GalleryModel from '../GalleryModel/GalleryModel'
import { rocaGallery } from '../../constants/roca'

const styles = () => ({
  contentContainer: {
    padding: [[10, 30]],
    maxWidth: 800,
    margin: [[0, 'auto']]
  }
})

const Roca = (props) => {
  const { classes } = props

  return (
    <SectionStructure {...props}>
      <Grid container classes={{root: classes.contentContainer}}>
        <GalleryModel model={rocaGallery}/>
      </Grid>
    </SectionStructure>
  )
}

export default withStyles(styles)(Roca)