import React, { useState, useCallback } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import {IconButton, Grid, Typography, withStyles} from '@material-ui/core'
import Loading from '../Loading/Loading'
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined'
import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'

const styles = () => ({
  container: {
    width: '100%',
    background: '#1c1c1e',
    flex: '1 0 100%',
    padding: [[50, 0]]
  },
  page: {
    '& canvas': {
      margin: [[0, 'auto']],
      borderRadius: 5
    }
  },
  actionGroup: {
    margin: [[10, 'auto']]
  },
  pages: {
    background: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
    lineHeight: '35px',
    padding: [[0, 8]],
    color: 'rgba(36, 68, 116, .8)',
    borderRight: '1px solid rgba(36, 68, 116, .2)'
  },
  actionIcon: {
    background: '#fff',
    fontSize: 12,
    height: '35px',
    padding: [[0, 8]],
    borderRadius: 0,
    borderRight: '1px solid rgba(36, 68, 116, .2)',
    color: 'rgba(36, 68, 116, .8)',
    '&:hover': {
      background: '#e1e1e1'
    },
    '&:first-child': {
      borderRadius: [[5, 0, 0, 5]]
    },
    '&:last-child': {
      borderRadius: [[0, 5, 5, 0]]
    },
    '&$disabled': {
      color: '#d1d1d1',
      background: '#fff'
    }
  },
  disabled: {}
})

function Thesis({ classes }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [zoom, setZoom] = useState(400)

  const onDocumentLoadSuccess = useCallback(({ numPages }) => setNumPages(numPages), [])
  const changePage = useCallback((newPage) => setPageNumber(newPage), [])
  const zoomChange = useCallback((zoomDir) => {
    const value = zoomDir === 'in' ? 100 : -100
    const newZoom = zoom + value
    setZoom(newZoom)
  }, [zoom])

  return (
    <Document
      className={classes.container}
      loading={<Loading />}
      file={'./assets/pdf/Delmito,delhito,delsujeto.pdf'}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Grid classes={{root: classes.actionGroup}} container alignItems={'center'} justify={'center'} >
        <IconButton
          disabled={pageNumber === 1}
          classes={{root: classes.actionIcon, disabled: classes.disabled}}
          onClick={() => changePage(pageNumber-1)}>
          <ArrowBackIosOutlinedIcon />
        </IconButton>
        <Typography classes={{root: classes.pages}}>
          {pageNumber} DE {numPages}
        </Typography>
        <IconButton
          disabled={pageNumber === numPages}
          classes={{root: classes.actionIcon, disabled: classes.disabled}}
          onClick={() => changePage(pageNumber+1)}>
          <ArrowForwardIosOutlinedIcon />
        </IconButton>
        <IconButton
          disabled={zoom === 400}
          classes={{root: classes.actionIcon, disabled: classes.disabled}}
          onClick={() => zoomChange('out')}>
          <ZoomOutOutlinedIcon />
        </IconButton>
        <IconButton
          disabled={zoom === 800}
          classes={{root: classes.actionIcon, disabled: classes.disabled}}
          onClick={() => zoomChange('in')}>
          <ZoomInOutlinedIcon />
        </IconButton>
      </Grid>
      <Page loading={<Loading />} className={classes.page} width={zoom} pageNumber={pageNumber} />
    </Document>
  )
}

export default withStyles(styles)(Thesis)