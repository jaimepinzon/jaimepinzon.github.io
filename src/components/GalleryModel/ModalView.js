import React, { useState } from 'react'
import {
  withStyles,
  Dialog,
  DialogContent,
  Button,
  ButtonGroup
} from '@material-ui/core'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'
import AspectRatioIcon from '@material-ui/icons/AspectRatio'
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined'

const styles = () => ({
  modal: {
    background: '#1c1c1e'
  },
  actionGroup: {
    padding: [[5, 0]],
    justifyContent: 'center'
  },
  actions: {
    borderColor: 'rgba(255,255,255,.3)',
    color: '#fff'
  },
  closeLabel: {
    justifyContent: 'flex-end',
    padding: [[5, 15]]
  },
  content: {
    borderColor: 'rgba(255,255,255,.3)',
    textAlign: 'center',
    '& img, & video': {
      maxWidth: '100%'
    }
  },
  ratio: {
    '& img, & video': {
      maxHeight: '90%'
    }
  },
  iframeVid: {
    width: '100%',
    height: '90%'
  }
})

const renderItem = (src, rootPath, isVideo, classes) => {
  if (isVideo) {
    const isEmbbed = src.indexOf('http') > -1
    return (
      isEmbbed ?
        <iframe
          src={src}
          frameBorder={0}
          className={classes.iframeVid}
          allow={'accelerometer; autoplay; encrypted-media'} allowFullScreen></iframe>
        :
        <video src={`${rootPath}${src}`} controls />
    )
  }
  return (
    <img src={`${rootPath}${src}`} />
  )
}

const ModalView = (props) => {
  const { classes, callbackModal, modalInfo = {}, rootPath } = props
  const { open, src, isVideo } = modalInfo
  const [view, setView] = useState('ratio')
  const contentClass = view === 'ratio' ? `${classes.content} ${classes.ratio}` : classes.content

  return (
    <Dialog
      classes={{
        paper: classes.modal
      }}
      fullScreen
      open={open}>
      <ButtonGroup classes={{root: classes.actionGroup, grouped: classes.actions}} size={'small'}>
        {!isVideo && <Button
          classes={{root: classes.close, label: classes.closeLabel}}
          onClick={() => setView('zoom')}
          endIcon={<ZoomInOutlinedIcon />}>
          Tamaño Real
        </Button>}
        {!isVideo && <Button
          classes={{root: classes.close, label: classes.closeLabel}}
          onClick={() => setView('ratio')}
          endIcon={<AspectRatioIcon />}>
          Ajustar en Pantalla
        </Button>}
        <Button
          classes={{root: classes.close, label: classes.closeLabel}}
          onClick={() => callbackModal(false, undefined, false)}
          endIcon={<CancelOutlinedIcon />}>
          Cerrar Vista
        </Button>
      </ButtonGroup>
      <DialogContent classes={{root: contentClass}}>
        {src && renderItem(src, rootPath, isVideo, classes)}
      </DialogContent>
    </Dialog>
  )
}

export default withStyles(styles)(ModalView)