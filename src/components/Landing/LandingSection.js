import React from 'react'
import {Grid, Typography, Button, withStyles} from '@material-ui/core'
import SVGIcon from '../SVGIcon/SVGIcon'
import SVGPath from '../SVGPath/SVGPath'

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
    stroke: 'rgba(255, 255, 255, .3)',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    fill: 'none',
    position: 'absolute',
    left: -222,
    width: 553,
    top: 66,
    '& path': {
      strokeDasharray: 'var(--offset, 100)',
      animation: '$strokeAnimation linear 25s infinite alternate'
    },
    '& path:nth-child(2), & path:nth-child(3)': {
      animationDirection: 'alternate-reverse',
      animationDuration: '22s'
    }
  },
  '.section.active': {
    fontSize: 60,
    '& $title': {
      fontSize: 90
    }
  },
  '@keyframes strokeAnimation': {
    '0%': { strokeDashoffset: 'var(--offset, 100)' },
    '50%': { strokeDashoffset: 0 },
    '100%': { strokeDashoffset: 'var(--offset, 100)' }
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
            <SVGPath
              d="M636.21,491.26C598.09,605.03,490.63,687,364.03,687c-53.96,0-104.44-14.89-147.55-40.78"/>
            <SVGPath
              d="M172.86,185.93C223.62,140.57,290.6,113,364.03,113c109.11,0,204.01,60.89,252.55,150.55"/>
            <SVGPath
              d="M364.03,655.58c-141.16,0-255.58-114.43-255.58-255.58s114.43-255.58,255.58-255.58"/>
            <SVGPath
              d="M546.88,563.02c39.99-41.72,64.56-98.33,64.56-160.69c0-59.39-18.04-112.07-50.14-151.52"/>
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
