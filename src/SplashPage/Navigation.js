import React, { useContext, useEffect, useState } from 'react'
import ButtonList from '../ButtonList'
import FlowerLogo from '../FlowerLogo'
import Switch from '../Switch';
import { motion } from 'framer-motion';
import { ReactComponent as NoahLogo } from '../Assets/NoahLogo-10.svg'
import '../FlowerLogo.css'
import { ThemeContext } from '../App';
import Socials from '../Socials';
import Story from '../Story';
import ContactDropdown from '../ContactDropdown';
import NoahPFP from '../NoahPFP';
import StoryCarousel from '../StoryCarousel';
import Button from '../Button';
import Footer from '../Footer';
import Noah from "../Assets/profilepic.jpeg"
import NoahLogoAnimated from '../NoahLogoAnimated';




const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  return (
    <motion.div className="Navigation"
      initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}} 
    >
      <div className='Switch__container'>
        <Switch />
      </div>
      <div className="splash__page">
        <Socials />
        <div className='splash__page--me'>
          {story ? <StoryCarousel /> : <FlowerLogo />}
        </div>
        {story ? <div className="NoahHeadShot"></div> : <NoahLogo className='NoahLogo' />}
        <ButtonList toggleStory={toggleStory} />
      </div>
      <Footer />
    </motion.div>
  )
}

export default Navigation