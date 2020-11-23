import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../Loading/Loading'
const Landing = React.lazy(() => import('../Landing/Landing'))

const AppContent = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Suspense fallback={<Loading />}>
          <Landing />
        </Suspense>
      </Route>
      <Route path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
  )
}

export default AppContent
