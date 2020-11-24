import React, { useRef } from 'react'

export default function SVGPath (props) {
  let svgPath = useRef(null)
  const offset = svgPath && svgPath.current && svgPath.current.getTotalLength()

  return (
    <path
      {...props}
      ref={svgPath}
      style={{'--offset': offset}}
    />
  )
}