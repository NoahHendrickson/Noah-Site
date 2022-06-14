import React, { useContext, useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from '../CodeStuff/FlowerLogo'
import Switch from '../Navbar/Switch';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as NoahLogo } from '../Assets/NoahBevel-20.svg'
import '../CodeStuff/FlowerLogo.css'
import { ThemeContext } from '../App';
import Socials from '../Navbar/Socials';
import Story from '../StoryStuff/Story';
import ContactDropdown from '../ContactDropdown/ContactDropdown';
import NoahPFP from '../StoryStuff/NoahPFP';
import StoryCarousel from '../StoryStuff/StoryCarousel';
import Noah from "../Assets/profilepic.jpeg"
import FancyCarat from '../StoryStuff/FancyCarat';
import homely from '../Assets/HomelyApp/FourScreens@1.5x.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  return (
    <motion.div className="Home">
      <div className='SideBar'>
        <FlowerLogo className="flower__container" />
        <NoahLogo className='NoahLogo'/>
        <ButtonList />
      </div>
      <div className='LeftContent'>
        <div>
          <h1 className='Headline'>DESIGNER & <br></br> SELF-TAUGHT DEVELOPER</h1>
        </div>
        <div>
          <h1></h1>
          <h1></h1>
          <h2></h2>
        </div>
      </div>
      <div></div>
      </motion.div>   
  )
}

export default Home