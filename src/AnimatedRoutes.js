import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LogoPage from './LogoPage';
import Navigation from './SplashPage/Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeContext } from './App';

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
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes