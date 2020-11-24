import React from 'react'
import {Grid, Typography, Button, withStyles} from '@material-ui/core'
import {withAppContext} from '../../context/withAppContext'
import SVGIcon from '../SVGIcon/SVGIcon'

const styles = theme => ({
  appBar: {
    position: 'fixed',
    zIndex: 100,
    color: theme.palette.primary.contrastText,
    width: '100%',
    padding: [[5, 0, 5, 30]],
    left: 0,
    boxSizing: 'border-box',
    '& svg': {
      height: 25,
      fill: theme.palette.primary.contrastText,
      marginRight: 10
    },
    borderBottom: '1px solid rgba(255,255,255, .7)'
  },
  thesis: {
    fontSize: 12
  },
  menu: {
    flex: '0 0 30%',
    marginLeft: 'auto'
  }
})

const AppBar = (props) => {
  const {classes} = props

  return (
    <div className={classes.appBar}>
      <Grid container alignItems={'center'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" xmlSpace="preserve" fill="currentColor">
          <path d="M100,17c45.77,0,83,37.23,83,83s-37.23,83-83,83s-83-37.23-83-83S54.23,17,100,17 M100,4C46.98,4,4,46.98,4,100
		s42.98,96,96,96s96-42.98,96-96S153.02,4,100,4L100,4z"/>
          <path d="M97.19,62.05h21.9c6.65,0,11.8,0.56,15.46,1.67c3.66,1.11,6.73,3.63,9.22,7.55c2.49,3.92,3.73,8.78,3.73,14.57
		c0,5.57-1,10.18-3.01,13.82c-2,3.64-4.78,6.27-8.33,7.88c-3.55,1.62-9,2.42-16.35,2.42h-5.91v28.14H97.19V62.05z M113.9,74.37
		v22.57h5.18c4.57,0,7.51-1.06,8.83-3.18c1.32-2.12,1.98-4.88,1.98-8.27c0-2.87-0.51-5.18-1.53-6.95c-1.02-1.77-2.21-2.9-3.57-3.41
		c-1.36-0.5-3.26-0.75-5.71-0.75H113.9z"/>
          <path d="M88.67,61.39H72.36H58.45v14.27h13.91v36.21c0,5.09-0.47,8.42-1.42,10c-0.95,1.58-2.89,2.37-5.82,2.37
		c-1.82,0-9.94-0.26-12.62-0.78v13.99c4.27,0.78,13.55,1.17,16.07,1.17c5.83,0,10.23-1.06,13.21-3.18c2.97-2.12,4.93-4.97,5.88-8.55
		c0.95-3.58,1.42-8.59,1.42-15.02V61.39H88.67z"/>
        </svg>
        <Typography classes={{root: classes.thesis}} variant={'h6'}>Del mito, Del hito, Del Sujeto / Jaime Pinzon</Typography>
        <Button
          variant={'text'}
          classes={{root: classes.menu}}
          startIcon={<SVGIcon xlinkHref={''} className={classes.outicon}/>}
          onClick={() => {
          }}>
          MENU
        </Button>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(withAppContext(AppBar))
