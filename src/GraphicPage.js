import React, { useContext } from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GraphicThumbnails from './GraphicThumbnails'
import Footer from './Footer'
import { ThemeContext } from './App'


const GraphicPage = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <motion.div
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .4}}} 
      className={theme === "light" ? 'GraphicPage' : 'GraphicPage__dark'}>
      <Navbar />
      <div className='graphics'>
        <div className='graphic howto'>
          <Link to="/HowToPC">
            <div className='hero__icon gpu'></div>
          </Link>
        </div>
        <div className='graphic nachobox'>
          <Link to="/NachoBox">
            <div className='hero__icon lime'></div>
          </Link>
        </div>
        <div className='graphic fit'>
          <Link to="/FitPage">
            <div className='hero__icon gear'></div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default GraphicPage