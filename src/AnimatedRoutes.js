import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LogoDesign from './LogoDesign';
import Navigation from './Navigation';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedRoutes = ({ theme }) => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation theme={theme} />} />
        <Route path="/logo_design" element={<LogoDesign /> } />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes