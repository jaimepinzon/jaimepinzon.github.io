import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import { sections } from '../../constants/sections'
import VideoSection from './VideoSection'
import LandingSection from './LandingSection'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  section: {
    transition: 'background .5s linear'
  }
})

const Landing = ({ classes }) => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      scrollBar
      onLeave={() => {}}
      render={({state, fullpageApi}) => {
        const indexState = (state && state.destination && state.destination.index && state.destination.index - 1) || 0
        const bg = sections[indexState] && sections[indexState].background
        return (
          <ReactFullpage.Wrapper>
            <VideoSection />
            {sections.map(section => (
              <LandingSection
                {...section}
                bgActive={bg}
                className={`${classes.section} section`}
                key={section.path} />
            ))}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default withStyles(styles)(Landing)
