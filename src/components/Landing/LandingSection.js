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
    alignSelf: 'stretch'
  }
})

const LandingSection = (props) => {
  const {
    classes,
    subtitle,
    title,
    className
  } = props

  return (
    <div className={className}>
      <Grid container classes={{ root: classes.container }} wrap={'nowrap'} alignItems={'center'}>
        <Grid item>
          <Typography>{title}</Typography>
          <Typography>{subtitle}</Typography>
          <Button
            variant={'contained'}
            classes={{root: classes.out}}
            endIcon={<SVGIcon xlinkHref={''} className={classes.outicon}/>}
            onClick={() => {
            }}>
            Visitar Seccion
          </Button>
        </Grid>
        <Grid item classes={{ root: classes.sideBar }}>
          <img src='' alt='GeologyStone'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(LandingSection)
