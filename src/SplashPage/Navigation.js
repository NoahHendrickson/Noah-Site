import React, { useContext, useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from '../CodeStuff/FlowerLogo'
import Switch from '../Navbar/Switch';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as NoahLogo } from '../Assets/NoahLogo-10.svg'
import '../CodeStuff/FlowerLogo.css'
import { ThemeContext } from '../App';
import Socials from '../Navbar/Socials';
import Story from '../StoryStuff/Story';
import ContactDropdown from '../ContactDropdown/ContactDropdown';
import NoahPFP from '../StoryStuff/NoahPFP';
import StoryCarousel from '../StoryStuff/StoryCarousel';
import Noah from "../Assets/profilepic.jpeg"

const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  return (
    <motion.div className="Navigation"
      // initial={{y: '-100vh'}}
      // animate={{y: '0'}}
      // exit={{y: '-100vh', transition:{duration: .1}}} 
    >
      <div className='Switch__container'>
      <Socials />
      <Switch />
      </div>
      <div className="splash__page">
        {/* <NoahLogoAnimated /> */}
        <div
          className='splash__page--me'>
            {story ? <StoryCarousel state={story} /> : <FlowerLogo />}
        </div>
        <NoahLogo className='NoahLogo' />
        <ButtonList toggleStory={toggleStory} />
      </div>
      </motion.div>
  )
}

export default Navigation