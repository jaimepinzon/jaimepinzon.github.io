import React from 'react'
import {Divider, Grid, Typography, withStyles} from '@material-ui/core'

const styles = () => ({
  vidSection: {
    position: 'relative',
    '& > div > *': {
      zIndex: 5,
      position: 'relative'
    },
    '& $videoBg': {
      zIndex: 1,
      position: 'absolute'
    }
  },
  videoBg: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    '& video': {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,.6)'
    }
  }
})

const VideoSection = ({classes}) => {
  return (
    <Grid className={'section'} classes={{root: classes.vidSection}} container direction={'column'}
      alignItems={'center'}>
      <div className={classes.videoBg}>
        <video playsInline autoPlay muted loop>
          <source src={'./assets/img/backgrounds/vid.mp4'} type="video/mp4"/>
        </video>
      </div>
      <Typography>
        The Rock Project
      </Typography>
      <Typography>
        Un proyecto que explora la evolucion de la diversidad en la antologia,
        de muchas palabras que estoy escribiendo para mostrar una intro concisa
      </Typography>
      <Divider/>
      <Typography>
        Por: Jaime Pinzon
      </Typography>
    </Grid>
  )
}

export default withStyles(styles)(VideoSection)