import React from 'react'
import {Grid, Typography, Button, withStyles} from '@material-ui/core'
import {withAppContext} from '../../context/withAppContext'
import SVGIcon from '../SVGIcon/SVGIcon'

const styles = theme => ({
  footer: {
    color: theme.palette.primary.contrastText,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    left: 0,
    textAlign: 'center'
  },
  copy: {
    fontSize: 9,
    padding: [[5, 0]]
  }
})

const copyDateYear = new Date().getFullYear()

const Footer = (props) => {
  const {classes} = props

  return (
    <div className={classes.footer}>
      <Typography classes={{root: classes.copy}}>
        Copyright © {copyDateYear}. Toda imagen y texto contenido en esta pagina
        web esta protegida bajo derechos de autor.
      </Typography>
    </div>
  )
}

export default withStyles(styles)(withAppContext(Footer))
