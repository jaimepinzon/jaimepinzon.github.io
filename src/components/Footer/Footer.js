import React from 'react'
import {Typography, withStyles, Grid} from '@material-ui/core'
import {withAppContext} from '../../context/withAppContext'
import InstagramIcon from '@material-ui/icons/Instagram'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'

const styles = theme => ({
  footer: {
    background: 'rgba(28, 28, 30, .6)',
    fontFamily: 'Montserrat, sans-serif',
    color: theme.palette.primary.contrastText,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    left: 0,
    textAlign: 'center',
    paddingTop: 5
  },
  copy: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 9,
    padding: [[5, 0]]
  },
  social: {
    color: '#fff',
    fontSize: 11,
    textDecoration: 'none',
    '& svg': {
      padding: [[0, 3, 0, 5]],
      verticalAlign: 'middle'
    }
  }
})

const copyDateYear = new Date().getFullYear()

const Footer = (props) => {
  const {classes} = props

  return (
    <div className={classes.footer}>
      <Grid container justify={'center'} alignItems={'center'}>
        <a className={classes.social} target={'_blank'} href={'https://www.instagram.com/jaime.santiagio/'}>
          <InstagramIcon />
          @jaime.santiagio
        </a>
        <a className={classes.social} target={'_blank'} href={'mailto:jaimesantiagio@gmail.com'}>
          <EmailOutlinedIcon />
          jaimesantiagio@gmail.com
        </a>
      </Grid>
      <Typography classes={{root: classes.copy}}>
        Copyright © {copyDateYear}. Toda imagen y texto contenido en esta pagina
        web esta protegida bajo derechos de autor.
      </Typography>
    </div>
  )
}

export default withStyles(styles)(withAppContext(Footer))
