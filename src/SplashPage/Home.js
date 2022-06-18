import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import '../CodeStuff/FlowerLogo.css'
import { ThemeContext } from '../App';
import ContactDropdown from '../ContactDropdown/ContactDropdown';
import Noah from "../Assets/profilepic.jpeg"
import { ReactComponent as DownCarat } from "../Assets/Story/fancyDownCarat.svg"
import { ReactComponent as Portfolio } from "../Assets/portfolio-22.svg"
import { ReactComponent as CONTACT } from "../Assets/CONTACT.svg"
import { ReactComponent as NoahLogo } from '../Assets/NoahBevel-20.svg'
import ButtonList from './ButtonList'
import FlowerLogo from '../CodeStuff/FlowerLogo'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NewUXArea from '../UXPages/NewUXArea';
import NewGraphicArea from '../Graphic Design Pages/NewGraphicArea';
import NewLogoArea from '../LogoPage/NewLogoArea';
import ContactPage from '../ContactDropdown/ContactPage';
import SideBar from './SideBar';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import UX from './UX';
import Graphic from './Graphic';
import Logos from './Logos';
import StoryCarousel from '../StoryStuff/StoryCarousel';
import ExpBox from './ExpBox';
import CodeBox from './CodeBox';
import LeavesAnimation from './LeavesAnimation';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  const screen = window.screen.width
  

  return (
    <motion.div className="Home">
    {screen > 600 ? 
      <Parallax className='Home' pages={4}>
        <div className='SplashPage'>
          <SideBar toggleStory={toggleStory} />
          <ParallaxLayer speed={.75} offset={0}>
            <LeftContent />
          </ParallaxLayer>
          <ParallaxLayer className="NegativeIndex" speed={.25}>
            <RightContent story={story} />
          </ParallaxLayer>
          <ParallaxLayer speed={3}>
            <div className='ScrollDownButton'>
              <DownCarat className='CaratAnimation'/>
              Scroll Down :)
            </div>
          </ParallaxLayer>
        </div>
        <div className='Work'>
          <ParallaxLayer offset={1} speed={.25} >
            <div className='PortfolioHeadline'>
              <Portfolio className='PortfolioTitle'/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.15} speed={1.25}>
            <UX />
          </ParallaxLayer>
          <ParallaxLayer offset={1.55} speed={.5}>
            <Graphic />
            </ParallaxLayer>
            <ParallaxLayer offset={1.85}>
            <div className='PortfolioArea'>
              <h1 className='AreaTitle'>Code</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <CodeBox />
              </div>
            </div>
            </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={.25}>
            <Logos />
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={3.1} speed={1.25}>
          <CONTACT className='NNN' />
        </ParallaxLayer>
        <ParallaxLayer offset={3.25} speed={.5}>
          <ContactPage />
        </ParallaxLayer>
        </Parallax> :
        <div className='MobileHome'>
          <div className='SplashPage'>
            {story ? <StoryCarousel state={story} /> : <FlowerLogo className="flower__container" />}
            <NoahLogo className='NoahLogo'/>
            <ButtonList toggleStory={toggleStory} />
          </div>
          <ExpBox mobile={45} /> 
          <UX />
          <Graphic />
          <div className='PortfolioArea'>
            <h1 className='AreaTitle'>Code</h1>
            <div className='TitleLineDivider'></div>
            <div className='AreaHolder'>
              <CodeBox />
            </div>
          </div>
          <Logos />
          <ContactPage />
          <LeavesAnimation />
        </div>  
      }
    </motion.div>   
  )
}

export default Home