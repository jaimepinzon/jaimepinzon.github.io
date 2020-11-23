import React from 'react'
import { Grid, Typography, Button, withStyles } from '@material-ui/core'
import { withAppContext } from '../../context/withAppContext'
import SVGIcon from '../SVGIcon/SVGIcon'

const styles = theme => ({
  appBar: {
    position: 'fixed',
    zIndex: 100,
    color: theme.palette.primary.contrastText,
    width: '100%',
    '& > div': {
      margin: [[0, 'auto']],
      height: '100%',
      padding: [[0, 8]],
      maxWidth: '90%',
    },
    '& img': {
      height: 20
    }
  },
  upBar: {
    height: 30,
    background: theme.palette.primary.main
  },
  bottomBar: {
    height: 50,
    background: `linear-gradient(-90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
  },
  power: {
    fontSize: 11,
    paddingRight: 4
  },
  copy: {
    fontSize: 11,
    paddingLeft: 15
  },
  out: {
    padding: [[0, 10]],
    marginLeft: 'auto',
    color: theme.palette.primary.contrastText
  },
  outicon: {
    width: 14
  }
})

const AppBar = (props) => {
  const { classes } = props
  const brandUrl = './assets/img/jp.svg'

  return (
    <div className={classes.appBar}>
      <Grid container alignItems={'center'}>
        <img src={brandUrl} alt="JP"/>
        <Typography classes={{ root: classes.thesis }}>The Rock Project / Jaime Pinzon</Typography>
        <Button
          variant={'text'}
          classes={{ root: classes.out }}
          startIcon={<SVGIcon xlinkHref={''} className={classes.outicon} />}
          onClick={ () => {} }>
          MENU
        </Button>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(withAppContext(AppBar))
