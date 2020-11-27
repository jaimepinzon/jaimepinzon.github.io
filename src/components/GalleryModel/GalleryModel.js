import React, { useMemo, useState, useCallback, useEffect } from 'react'
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
import Loading from '../Loading/Loading'

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
  videoCaption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 8,
    width: '100%',
    textAlign: 'left'
  },
  hide: {
    display: 'none'
  }
})

function IsVideo (item) {
  return item && (item.type === 'video' || item.type === 'iframe')
}

function IsEdgeOfVideo (count, index, itemList) {
  const edgeSideLookup = ((count % 3 === 0) && 'left') || (((count - 1) % 3 === 0) && 'right')
  if (!edgeSideLookup) return  false
  const indexToLook = edgeSideLookup === 'left' ? index - 1 : index + 1
  return IsVideo(itemList[indexToLook])
}

const GalleryModel = (props) => {
  const { classes, model = {} } = props
  const { intro, rootPath, list = [] } = model
  const [load, setLoad] = useState(true)
  const [modalInfo, setModalInfo] = useState({
    open: false,
    src: undefined,
    isVideo: false
  })
  const callModal = useCallback((open, src, isVideo) => {
    setModalInfo({ open, src, isVideo })
  }, [])
  let count = useMemo(() => 1, [model])

  useEffect(() => {
    setTimeout(() => { setLoad(false) }, 1500)
  }, [])

  return (
    <div>
      <Typography classes={{root: classes.quote}} variant={'body2'}>
        {intro}
      </Typography>
      <Loading className={`${!load && classes.hide}`} />
      <GridList cellHeight={150} className={`${load ? classes.hide : classes.gridList}`} cols={3}>
        {list.map((item, i, actualList) => {
          const modulusMatrix = (count % 2) === 0 ? 4 : 11
          const matrixValue = ((count - modulusMatrix) / 12)
          const isDoubleColumn = matrixValue >= 0 && Number.isInteger(matrixValue)
          const isVideo = IsVideo(item)
          const isEdgeOfVideo = IsEdgeOfVideo(count, i, actualList)
          const col = (isVideo || (isDoubleColumn && !isEdgeOfVideo)) ? 2 : 1
          const row = (isVideo || isEdgeOfVideo) ? 2 : 1
          const thumb = isVideo ? item.thumb : item.value
          count += col

          return (
            <GridListTile key={`${item.value}-${i}`} cols={col} rows={row} classes={{tile: classes.imgContainer}}>
              <img src={`${rootPath}thumbnails/${thumb}`}/>
              {isVideo &&
                  <Grid container alignItems={'center'} justify={'center'} classes={{root: classes.videoOverlay}}>
                    <PlayCircleFilledOutlinedIcon/>
                    {item.caption && <Typography  classes={{root: classes.videoCaption}}>{item.caption}</Typography>}
                  </Grid>}
              <ButtonBase classes={{root: classes.link}} onClick={() => callModal(true, item.value, isVideo)}/>
            </GridListTile>
          )
        })}
      </GridList>
      <ModalView modalInfo={modalInfo} callbackModal={callModal} rootPath={rootPath} />
    </div>

  )
}

export default withStyles(styles)(GalleryModel)