import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { sections } from '../../constants/sections'
const Landing = React.lazy(() => import('../Landing/Landing'))
const Historia = React.lazy(() => import('../Sections/Historia'))
const Roca = React.lazy(() => import('../Sections/Roca'))
const Cascara = React.lazy(() => import('../Sections/Cascara'))
const Desarmar = React.lazy(() => import('../Sections/Desarmar'))
const Desacumulacion = React.lazy(() => import('../Sections/Desacumulacion'))
const Mundos = React.lazy(() => import('../Sections/Mundos'))
const Polvo = React.lazy(() => import('../Sections/Polvo'))
const Registro = React.lazy(() => import('../Sections/Registro'))
const Thesis = React.lazy(() => import('../Thesis/Thesis'))

const sectionComponents = {
  '/historia': Historia,
  '/roca': Roca,
  '/desacumulacion': Desacumulacion,
  '/cascara': Cascara,
  '/desarmar': Desarmar,
  '/polvo': Polvo,
  '/mundos': Mundos,
  '/registro': Registro
}

const AppContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<Loading />}>
          <Landing />
        </Suspense>
      </Route>
      <Route exact path="/tesis">
        <Suspense fallback={<Loading />}>
          <Thesis />
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
