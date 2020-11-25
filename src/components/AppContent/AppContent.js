import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { sections } from '../../constants/sections'
const Landing = React.lazy(() => import('../Landing/Landing'))
const Historia = React.lazy(() => import('../Sections/Historia'))
const Desgastar = React.lazy(() => import('../Sections/Desgastar'))

const sectionComponents = {
  '/historia': Historia,
  '/desgastar': Desgastar
}

const AppContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<Loading />}>
          <Landing />
        </Suspense>
      </Route>
      {sections.map(s => {
        const ComponentSection = sectionComponents[s.path]
        return (
          ComponentSection &&
          <Route exact path={s.path} key={s.path}>
            <Suspense fallback={<Loading/>}>
              <ComponentSection {...s} />
            </Suspense>
          </Route>
        )
      })}
      <Route path="/">
        <Redirect to="/"/>
      </Route>
    </Switch>
  )
}

export default AppContent
