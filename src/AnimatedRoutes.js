import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LogoPage from './LogoPage';
import Navigation from './SplashPage/Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from './App';
import GraphicPage from './GraphicPage';
import NachoBox from './NachoBox';
import HowToPage from './HowToPage';
import NoahLogoAnimated from './NoahLogoAnimated';
import UXPage from './UXPage';
import DarkMatterPage from './DarkMatterPage';

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
        <Route path="/" element={<Navigation />} />
        <Route path="/logo_design" element={<LogoPage />} />
        <Route path="/GraphicPage" element={<GraphicPage />} />
        <Route path='/NachoBox' element={<NachoBox />} />
        <Route path='/HowToPC' element={<HowToPage />} />
        <Route path='/NoahAni' element={<NoahLogoAnimated />} />
        <Route path="/UXPage" element={<UXPage />} />
        <Route path="/DarkMatter" element={<DarkMatterPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes