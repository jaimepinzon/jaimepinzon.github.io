import React from 'react'
import { withStyles, Typography } from '@material-ui/core'

const styles = () => ({
  pic: {
    margin: [[15, 'auto']],
    maxWidth: '100%'
  },
  text: {
    color: '#1c1c1e'
  },
  parag: {
    marginBottom: 10,
    fontSize: 16
  },
  title: {
    margin: [[20, 0]]
  },
  quote: {
    width: '80%',
    padding: 10,
    margin: [[20, 'auto']],
    borderLeft: '3px solid rgba(36, 68, 116, .2)'
  }
})

const variants = {
  title: 'h4',
  text: 'body1',
  quote: 'body2'
}

const TextInterpreter = ({ text, classes }) => {
  return (
    text && text.map((part, i) => {
      return (
        part.type === 'image' ?
          <img className={classes.pic} key={`${part.type}-${i}`} src={part.value} />
          : <Typography
            variant={variants[part.type]}
            key={`${part.type}-${i}`}
            classes={{
              root: classes.text,
              body1: classes.parag,
              body2: classes.quote,
              h4: classes.title
            }}>
            {part.value}
          </Typography>
      )
    })
  )
}

export default withStyles(styles)(TextInterpreter)