import React from 'react'
import { SvgIcon } from '@material-ui/core'

export default function SVGIcon (props) {
  const { xlinkHref, className, viewBox } = props

  return (
    <SvgIcon
      className={className}
      viewBox={viewBox}>
      <use
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xlinkHref={xlinkHref}
      />
    </SvgIcon>
  )
}
