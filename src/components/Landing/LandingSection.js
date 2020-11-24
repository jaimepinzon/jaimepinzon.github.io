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
    padding: [[30, '5%']],
    marginLeft: 'auto'
  },
  subtitle: {
    color: '#fff',
    margin: [[10, 0, 25]],
    fontWeight: 300,
    fontSize: 16,
    maxWidth: 350
  },
  title: {
    paddingTop: 45,
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
    position:  'relative',
    zIndex: 20,
    boxShadow: '-4px 8px 3px rgba(0,0,0,.3)',
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
    left: -183,
    width: 428,
    top: '50%',
    transform: 'translateY(-50%)',
    '& path': {
      strokeDasharray: 'var(--offset, 100)',
      animation: '$strokeAnimation linear 12s infinite alternate'
    },
    '& path:nth-child(2)': {
      animationDirection: 'alternate-reverse',
      animationDuration: '10s'
    },
    '& path:nth-child(1)': {
      animationDirection: 'alternate-reverse',
      animationDuration: '8s'
    },
    '& path:nth-child(3)': {
      animationDuration: '6s'
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
    '100%': { strokeDashoffset: 0 }
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
          <svg viewBox="0 0 428 428"  className={classes.svg} xmlSpace="preserve">
            <SVGPath d="M407.7,279.8C380.2,361.9,302.7,421,211.3,421c-38.9,0-75.3-10.7-106.4-29.4"/>
            <SVGPath d="M73.5,59.6C110.1,26.9,158.4,7,211.3,7C290,7,358.5,50.9,393.5,115.6"/>
            <SVGPath d="M211.3,398.3C109.5,398.3,27,315.8,27,214S109.5,29.7,211.3,29.7"/>
            <SVGPath d="M343.2,331.6c28.8-30.1,46.6-70.9,46.6-115.9c0-42.8-13-80.8-36.2-109.3"/>
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
