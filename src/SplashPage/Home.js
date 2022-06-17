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
import { ReactComponent as CONTACT } from "../Assets/CONTACT.svg"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ExpBox from './ExpBox';
import NewUXArea from '../UXPages/NewUXArea';
import NewGraphicArea from '../Graphic Design Pages/NewGraphicArea';
import NewLogoArea from '../LogoPage/NewLogoArea';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  return (
    <motion.div className="Home">
      <Parallax className='Home' pages={3}>
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
          <ParallaxLayer speed={.25}>
            <div className='RightContent'>
              {story ? <StoryCarousel /> : null}
            </div>
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
          <ParallaxLayer offset={1.15} speed={.5}>
            <div className='PortfolioArea'>
              <h1 className='AreaTitle'>UX</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <NewUXArea />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={1}>
            <div className='PortfolioArea'>
              <h1 className='AreaTitle'>Graphic Design</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <NewGraphicArea />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.85} speed={1.25}>
            <div className='PortfolioArea cream'>
              <h1 className='AreaTitle'>Logos</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <NewLogoArea />
              </div>
            </div>
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={2.08} speed={1.25}>
          <CONTACT className='NNN' />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={.5}>
          <div className='ContactPage'>
            <ContactDropdown />
          </div>
         </ParallaxLayer>
      </Parallax>
    </motion.div>   
  )
}

export default Home