import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LogoPage from './LogoPage/LogoPage';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from './App';
import GraphicPage from './Graphic Design Pages/GraphicPage';
import NachoBox from './Graphic Design Pages/NachoBox';
import HowToPage from './Graphic Design Pages/HowToPage';
import UXPage from './UXPages/UXPage';
import DarkMatterPage from './UXPages/DarkMatterPage';
import FitPage from './Graphic Design Pages/FitPage';
import HomelyAppPage from './UXPages/HomelyAppPage';
import TheCRPO from './CodeStuff/TheCRPO';
import SVGAnimations from './CodeStuff/SVGAnimations';
import FullStory from './StoryStuff/FullStory';
import Home from './SplashPage/Home';
import ContactPage from './ContactDropdown/ContactPage';
import LeavesAnimation from './SplashPage/LeavesAnimation';

const AnimatedRoutes = () => {

  const location = useLocation();
  const {theme, setTheme } = useContext(ThemeContext)

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/logo_design" element={<LogoPage />} />
        <Route path="/GraphicPage" element={<GraphicPage />} />
        <Route path='/NachoBox' element={<NachoBox />} />
        <Route path='/HowToPC' element={<HowToPage />} />
        <Route path="/UXPage" element={<UXPage />} />
        <Route path="/DarkMatter" element={<DarkMatterPage />} />
        <Route path='/FitPage' element={<FitPage />} />
        <Route path='/HomelyPage' element={<HomelyAppPage />} />
        <Route path='/CrpoPage' element={<TheCRPO />} />
        <Route path='SVGAnimations' element={<SVGAnimations />} />
        <Route path='FullStory' element={<FullStory />} />
        <Route path="ContactPage" element={<ContactPage />} />
        <Route path="Ani" element={<LeavesAnimation />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes