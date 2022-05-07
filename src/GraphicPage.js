import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GraphicThumbnails from './GraphicThumbnails'
import Footer from './Footer'


const GraphicPage = () => {
  return (
    <motion.div
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}} 
      className='GraphicPage'>
      <div className='Nav'>
        <Navbar />
      </div>
      <div className='graphics'>
        <div className='graphic howto'>
          <Link to="/">
            <div className='hero__icon gpu'></div>
          </Link>
        </div>
        <div className='graphic nachobox'>
          <div className='hero__icon lime'></div>
        </div>
        <div className='graphic hyperglide'>
          <div className='hero__icon squiggle'></div>
        </div>
        <div className='graphic fit'>
          <div className='hero__icon gear'></div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default GraphicPage