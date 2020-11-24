import React from 'react'
import {Divider, Grid, Typography, withStyles} from '@material-ui/core'

const styles = (theme) => ({
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
  },
  text: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    width: '60%',
    maxWidth: 500,
    margin: [[0, 'auto']]
  },
  divider: {
    background: 'rgba(255, 255, 255, .5)',
    width: 300,
    maxWidth: '40%',
    margin: [[25, 'auto']]
  },
  subtitle: {
    fontWeight: 300,
    fontSize: 13,
    marginTop: 10
  },
  by: {
    fontSize: 11,
    marginTop: 10
  }
})

const VideoSection = ({classes}) => {
  return (
    <Grid className={'section'} classes={{root: classes.vidSection}} container direction={'column'}
      alignItems={'center'} justify={'center'}>
      <div className={classes.videoBg}>
        <video playsInline autoPlay muted loop>
          <source src={'./assets/img/backgrounds/vid.mp4'} type="video/mp4"/>
        </video>
      </div>
      <Typography classes={{ root: classes.text }} variant={'h1'}>
        Del Mito, Del Hito, Del Sujeto
      </Typography>
      <Typography className={classes.subtitle} classes={{ root: classes.text }}>
        Un proyecto que explora la evolucion de la diversidad en la antologia,
        de muchas palabras que estoy escribiendo para mostrar una intro concisa
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography className={classes.by} classes={{ root: classes.text }}>
        Por: Jaime Pinzon
      </Typography>
    </Grid>
  )
}

export default withStyles(styles)(VideoSection)