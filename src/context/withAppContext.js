import React, { useContext } from 'react'
import { AppContext } from './AppContext'

export const withAppContext = (ComposedComponent) => (props) => {
  const context = useContext(AppContext)
  return <ComposedComponent {...context} {...props} />
}
