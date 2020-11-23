import React from 'react'
import { Grid, Typography, Button, withStyles } from '@material-ui/core'
import { withAppContext } from '../../context/withAppContext'
import SVGIcon from '../SVGIcon/SVGIcon'

const styles = theme => ({
  appBar: {
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

const copyDateYear = new Date().getFullYear()

const AppBar = (props) => {
  const { classes, position, isAuthenticated, messageBus, authHandler } = props
  const logoUrl = './assets/img/genius-sports-logos/genius-sports-media-horizontal-white.svg'
  const signOutIcon = './assets/img/icons.svg#ic-sign-out'
  const positionClass = position === 'up' ? classes.upBar : classes.bottomBar

  return (
    <div className={`${classes.appBar} ${positionClass}`}>
      <Grid container alignItems={'center'}>
        <img src={logoUrl} alt="GSM"/>
        <Typography classes={{ root: classes.power }}>Powered by</Typography>
        {position === 'bottom' && <Typography classes={{ root: classes.copy }}>Copyright © {copyDateYear}. All rights reserved.</Typography>}
        {isAuthenticated && position !== 'bottom' &&
          <Button
            variant={'text'}
            classes={{ root: classes.out }}
            endIcon={<SVGIcon xlinkHref={signOutIcon}className={classes.outicon} />}
            onClick={ () => signOut(authHandler, messageBus) }>
            Sign Out
          </Button>
        }
      </Grid>
    </div>
  )
}

export default withStyles(styles)(withAppContext(AppBar))
