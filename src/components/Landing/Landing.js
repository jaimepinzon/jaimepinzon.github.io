import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { sections } from '../../constants/sections'
import VideoSection from './VidesoSection'
import LandingSection from './LandingSection'

const Landing = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollBar
      render={({state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
            <VideoSection />
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
