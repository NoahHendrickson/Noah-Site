import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LogoDesign from './LogoDesign';
import Navigation from './Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from './App';
import Carasol from './Carasol';

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
        <Route path="/logo_design" element={<LogoDesign />} />
        {/* <Route path="/boscia" element={<Carasol />} /> */}
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes