import React, { useContext, useState } from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from './FlowerLogo'
import Switch from './Switch';
import { motion } from 'framer-motion';
import { ReactComponent as NoahLogo } from './Assets/NoahLogo-10.svg'

import './FlowerLogo.css'
import { ThemeContext } from './App';
import Socials from './Socials';
import Story from './Story';



const Navigation = () => {

  const { theme, setTheme } = useContext(ThemeContext)
  const [storyOpen, setStoryOpen] = useState(false)
  function showStory() {
    setStoryOpen(!storyOpen)
  }

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
        {storyOpen && <Story />}
        <h1>The theme is {theme}</h1>
        <Socials />
        <FlowerLogo />
        <NoahLogo className='NoahLogo'/>
        <ButtonList showStory={showStory} />
        <button onClick={showStory}>Story</button>
      </div>
    </motion.div>
  )
}

export default Navigation