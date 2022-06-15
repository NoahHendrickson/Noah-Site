import React, { useContext, useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from '../CodeStuff/FlowerLogo'
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as NoahLogo } from '../Assets/NoahBevel-20.svg'
import '../CodeStuff/FlowerLogo.css'
import { ThemeContext } from '../App';
import ContactDropdown from '../ContactDropdown/ContactDropdown';
import StoryCarousel from '../StoryStuff/StoryCarousel';
import Noah from "../Assets/profilepic.jpeg"
import { ReactComponent as Headline } from '../Assets/Story/Headline-21.svg'
import { ReactComponent as DownCarat } from "../Assets/Story/fancyDownCarat.svg"
import { ReactComponent as Portfolio } from "../Assets/portfolio-22.svg"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import FourScreens from "../Assets/HomelyApp/FourScreens@1.5x.jpg"

import ExpBox from './ExpBox';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  return (
    <motion.div className="Home">
      <Parallax className='Home' pages={2}>
        <div className='SplashPage'>
          <div className='SideBar'>
            <ParallaxLayer className='SideBar' speed={2}>
              <FlowerLogo className="flower__container" />
              <NoahLogo className='NoahLogo'/>
              <ButtonList toggleStory={toggleStory} />
            </ParallaxLayer>
          </div>
          <ParallaxLayer speed={.75} offset={0}>
            <div className='LeftContent'>
              <Headline className='Headline' />
              <ExpBox />
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={1.5}>
            <div className='RightContent'>
              {story ? <StoryCarousel /> : null}
            </div>
          </ParallaxLayer>
          <div className='ScrollDownButton'>
            <DownCarat className='CaratAnimation'/>
              Scroll Down :)</div>
          </div>
        <ParallaxLayer offset={1} speed={.5} >
          <div className='Work'>
            <div className='PortfolioHeadline'>
              <Portfolio className='PortfolioTitle'/>
            </div>
            <div className='PortfolioArea'>
              <h1 className='ExpTitle'>UX</h1>
              <div className='TitleLineDivider'></div>
              <div>
                <h2 className='ExpDescription'>Homely App</h2>
                <div className='ThumbnailHolder'>
                  <img className="WorkIcon" src={FourScreens} />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </motion.div>   
  )
}

export default Home