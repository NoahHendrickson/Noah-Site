import React from 'react'
import NoahPFP from './NoahPFP'

const StoryCarousel = () => {
  return (
    <div className='storyCarousel'>
      <NoahPFP Title="Developer" Text="I am learning to code. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <div className='NoahHeadShot'></div>
      <NoahPFP Title="Designer" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      {/* <NoahPFP Title="Story" Text="This is how I got to where I am. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/> */}
    </div>
  )
}

export default StoryCarousel