import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { sections } from '../../constants/sections'
import { Grid, Typography, Divider } from '@material-ui/core'
import LandingSection from './LandingSection'

const Landing = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollBar
      render={({state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
            <Grid className={'section'} container direction={'column'} alignItems={'center'}>
              <Typography>
                The Rock Project
              </Typography>
              <Typography>
                Un proyecto que explora la evolucion de la diversidad en la antologia,
                de muchas palabras que estoy escribiendo para mostrar una intro concisa
              </Typography>
              <Divider />
              <Typography>
                Por: Jaime Pinzon
              </Typography>
            </Grid>
            {sections.map(section => (
              <LandingSection
                {...section}
                className={'section'}
                key={section.path} />
            ))}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default Landing
