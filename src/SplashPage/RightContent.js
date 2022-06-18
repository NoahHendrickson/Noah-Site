import React from 'react'
import Socials from '../Navbar/Socials';
import LeavesAnimation from './LeavesAnimation';
import StoryCarousel from '../StoryStuff/StoryCarousel';


const RightContent = ({story}) => {
  return (
    <div className='RightContent'>
      {story ? <StoryCarousel /> :
        <div className='SocialSideBar'>
          <LeavesAnimation />
          <Socials />
        </div>
      }
    </div>
  )
}

export default RightContent