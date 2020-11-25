import React from 'react'
import {withStyles, GridList, GridListTile} from '@material-ui/core'

const styles = () => ({
  imgContainer: {
    background: '#1c1c1e',
    textAlign: 'center'
  }
})

const GalleryModel = (props) => {
  const { classes, list = [] } = props
  let count = 0
  let videoRendered = false

  return (
    <GridList cellHeight={150} className={classes.gridList} cols={3}>
      {list.map((item, i) => {
        const isByFour = ((i+1) % 4) === 0
        const isVideo = item.type === 'video'
        const col = isVideo ? 2 : isByFour ? 2 : 1
        const row = isVideo ? 2 : (videoRendered && ((count+1) % 3 === 0)) ? 2 : 1
        videoRendered = isVideo
        count += col

        return (
          <GridListTile key={`${item.value}-${i}`} cols={col} rows={row} classes={{ tile: classes.imgContainer }}>
            {isVideo ?
              <video src={item.value} controls height={'100%'} />
              : <img src={item.value} />
            }

          </GridListTile>
        )
      })}
    </GridList>
  )
}

export default withStyles(styles)(GalleryModel)