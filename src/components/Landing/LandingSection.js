import React from 'react'
import {Grid, Typography, Button, withStyles} from '@material-ui/core'
import SVGIcon from '../SVGIcon/SVGIcon'

const styles = theme => ({
  container: {
    height: '100%'
  },
  sideBar: {
    background: 'black',
    flex: '0 0 30%',
    alignSelf: 'stretch',
    marginLeft: 'auto',
    position: 'relative'
  },
  content: {
    padding: [[30, '5%']]
  },
  subtitle: {
    color: '#fff',
    margin: [[10, 0, 25]],
    fontWeight: 300,
    fontSize: 16,
    maxWidth: 350
  },
  title: {
    paddingTop: 25,
    color: '#fff'
  },
  go: {
    color: '#fff',
    marginTop: 15,
    background: 'rgba(36, 68, 116, .2)',
    '&:hover': {
      background: 'rgba(36, 68, 116, .8)'
    }
  },
  imgContainer: {
    width: 320,
    height: 320,
    overflow: 'hidden',
    borderRadius: '50%',
    background: '#000',
    left: -130,
    top: 25,
    position:  'relative',
    zIndex: 20,
    '& img': {
      margin: [[-50, 0, 0, -50]],
      maxWidth: 400,
      animation: '$move 30s linear infinite'
    }
  },
  '@keyframes move': {
    '0%': {
      transform: 'translate(-8%, -8%) skew(5deg, 5deg)'
    },
    '50%': {
      transform: 'translate(8%, 8%) skew(-5deg, -5deg)'
    },
    '100%': {
      transform: 'translate(-8%, -8%) skew(5deg, 5deg)'
    }
  },
  svg: {
    stroke: '#fff',
    fill: 'none',
    position: 'absolute',
    left: -213,
    width: 540,
    top: 73
  },
  '.section.active': {
    fontSize: 60,
    '& $title': {
      fontSize: 90
    }
  }
})

const LandingSection = (props) => {
  const {
    classes,
    subtitle,
    title,
    className,
    bgActive,
    background,
    thumbnail
  } = props

  return (
    <div className={className} style={{background: bgActive || background}}>
      <Grid container classes={{ root: classes.container }} wrap={'nowrap'} alignItems={'center'}>
        <Grid item classes={{ root: classes.content }}>
          <Typography classes={{ root: classes.title }} variant={'h2'}>{title}</Typography>
          <Typography classes={{ root: classes.subtitle }}>{subtitle}</Typography>
          <Button
            variant={'contained'}
            classes={{root: classes.go}}
            endIcon={<SVGIcon xlinkHref={''} className={classes.outicon}/>}
            onClick={() => {
            }}>
            Visitar Seccion
          </Button>
        </Grid>
        <Grid container classes={{ root: classes.sideBar }} justify={'center'} direction={'column'}>
          <svg viewBox="0 0 800 800"  className={classes.svg} xmlSpace="preserve">
            <path
              d="M636.21,491.26C598.09,605.03,490.63,687,364.03,687c-53.96,0-104.44-14.89-147.55-40.78"/>
            <path
              d="M172.86,185.93C223.62,140.57,290.6,113,364.03,113c109.11,0,204.01,60.89,252.55,150.55"/>
            <path
              d="M364.03,655.58c-141.16,0-255.58-114.43-255.58-255.58s114.43-255.58,255.58-255.58"/>
            <path
              d="M546.88,563.02c39.99-41.72,64.56-98.33,64.56-160.69c0-59.39-18.04-112.07-50.14-151.52"/>
            <path
              d="M668.24,359.96c3,3.89,4.78,8.76,4.78,14.04c0,12.7-10.3,23-23,23s-23-10.3-23-23c0-6.22,2.47-11.86,6.48-16"/>
            <path
              d="M700.41,363c2.92-3.08,7.04-5,11.62-5c8.84,0,16,7.16,16,16s-7.16,16-16,16c-5.14,0-9.72-2.43-12.64-6.19"/>
            <path
              d="M772.75,380.7c-2.01,2.61-5.17,4.3-8.72,4.3c-6.08,0-11-4.92-11-11s4.92-11,11-11c3.04,0,5.79,1.23,7.78,3.22"
            />
            <path d="M68.93,380.83c5.31,2.54,9.65,7.1,11.77,13.09c4.23,11.98-2.05,25.12-14.03,29.35
	c-11.98,4.23-25.12-2.05-29.35-14.03c-2.41-6.83-1.41-14.04,2.13-19.76"/>
            <path d="M95,542.65c-5.48-0.98-10.29-4.8-12.28-10.43c-2.94-8.33,1.43-17.47,9.76-20.41
	c8.33-2.94,17.47,1.43,20.41,9.76c1.18,3.36,1.18,6.84,0.22,10"/>
            <path d="M100.97,280.86c-3.26-1.83-5.89-4.81-7.23-8.61c-2.94-8.33,1.43-17.47,9.76-20.41
	c8.33-2.94,17.47,1.43,20.41,9.76c1.47,4.17,1.11,8.53-0.65,12.23"/>
          </svg>
          <div className={classes.imgContainer}>
            <img src={`./assets/img/sections/${thumbnail}`} alt='GeologyStone'/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(LandingSection)
