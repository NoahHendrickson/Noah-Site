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
import ContactPage from '../ContactDropdown/ContactPage';

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [story, setStory] = useState(false);

  function toggleStory() {
    setStory(!story)
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div className="Home">
        <div className='SplashPage'>
      <Parallax className='Home' pages={1}>
          <div className='SideBar'>
            <ParallaxLayer className='SideBar' offset={.1} speed={2}>
              <FlowerLogo className="flower__container" />
              <NoahLogo className='NoahLogo'/>
              <ButtonList toggleStory={toggleStory} scroll={scrollToBottom} />
              <button onClick={scrollToBottom}>hell</button>
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
        </Parallax>
        </div>
      <div className='Work'>
        <Parallax pages={1}>
            <div className='PortfolioHeadline'>
              <Portfolio className='PortfolioTitle'/>
            </div>
            <div className='PortfolioArea'>
              <h1 className='AreaTitle'>UX</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <NewUXArea />
              </div>
            </div>
            <div className='PortfolioArea'>
              <h1 className='AreaTitle'>Graphic Design</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <NewGraphicArea />
              </div>
            </div>
            <div className='PortfolioArea cream'>
              <h1 className='AreaTitle'>Logos</h1>
              <div className='TitleLineDivider'></div>
              <div className='AreaHolder'>
                <NewLogoArea />
              </div>
          </div>
          </Parallax>
        </div>
          <CONTACT className='NNN' />
          <ContactPage />
    </motion.div>   
  )
}

export default Home