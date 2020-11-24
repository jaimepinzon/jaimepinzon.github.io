import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { sections } from '../../constants/sections'
const Landing = React.lazy(() => import('../Landing/Landing'))

const AppContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<Loading />}>
          <Landing />
        </Suspense>
      </Route>
      {sections.map(s => (
        <Route exact path={s.path} key={s.path}>
          <Suspense fallback={<Loading />}>
            <div>Text Section {s.title}</div>
          </Suspense>
        </Route>
      ))}
      <Route path="/">
        <Redirect to="/"/>
      </Route>
    </Switch>
  )
}

export default AppContent
