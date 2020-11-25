import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import SectionStructure from './SectionStructure'
import GalleryModel from '../GalleryModel/GalleryModel'
import { desgastarGallery } from '../../constants/desgastar'

const styles = () => ({
  contentContainer: {
    padding: [[10, 30]],
    maxWidth: 800,
    margin: [[0, 'auto']]
  }
})

const Desgastar = (props) => {
  const { classes } = props

  return (
    <SectionStructure {...props}>
      <Grid container classes={{root: classes.contentContainer}}>
        <GalleryModel list={desgastarGallery}/>
      </Grid>
    </SectionStructure>
  )
}

export default withStyles(styles)(Desgastar)