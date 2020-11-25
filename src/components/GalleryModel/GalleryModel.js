import React, { useMemo, useState, useCallback } from 'react'
import {
  withStyles,
  GridList,
  GridListTile,
  Typography,
  ButtonBase,
  Grid
} from '@material-ui/core'
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined'
import ModalView from './ModalView'

const styles = () => ({
  imgContainer: {
    background: '#1c1c1e',
    textAlign: 'center'
  },
  quote: {
    color: '#1c1c1e',
    width: '90%',
    padding: 10,
    margin: [[20, 'auto']],
    borderLeft: '3px solid rgba(36, 68, 116, .2)'
  },
  link: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  videoOverlay: {
    position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0, .5)',
    color: '#fff',
    '& svg': {
      fontSize: 60
    }
  },
})

const GalleryModel = (props) => {
  const { classes, model = {} } = props
  const { intro, rootPath, list = [] } = model
  const [modalInfo, setModalInfo] = useState({
    open: false,
    src: undefined,
    isVideo: false
  })
  const callModal = useCallback((open, src, isVideo) => {
    setModalInfo({ open, src, isVideo })
  }, [])
  let count = useMemo(() => 0, [model])
  let videoRendered = useMemo(() => false, [model])

  return (
    <div>
      <Typography classes={{root: classes.quote}} variant={'body2'}>
        {intro}
      </Typography>
      <GridList cellHeight={150} className={classes.gridList} cols={3}>
        {list.map((item, i) => {
          const isByFour = ((i+1) % 4) === 0
          const isVideo = item.type === 'video'
          const col = isVideo ? 2 : isByFour ? 2 : 1
          const row = isVideo ? 2 : (videoRendered && ((count+1) % 3 === 0)) ? 2 : 1
          const thumb = isVideo ? item.value.replace('.mp4', '.jpg') : item.value
          videoRendered = isVideo
          count += col

          return (
            <GridListTile key={`${item.value}-${i}`} cols={col} rows={row} classes={{ tile: classes.imgContainer }}>
              <img src={`${rootPath}thumbnails/${thumb}`} />
              {isVideo && <Grid container alignItems={'center'} justify={'center'} classes={{root: classes.videoOverlay}}>
                <PlayCircleFilledOutlinedIcon />
              </Grid>}
              <ButtonBase classes={{root: classes.link}} onClick={() => callModal(true, item.value, isVideo)} />
            </GridListTile>
          )
        })}
      </GridList>
      <ModalView modalInfo={modalInfo} callbackModal={callModal} rootPath={rootPath} />
    </div>

  )
}

export default withStyles(styles)(GalleryModel)