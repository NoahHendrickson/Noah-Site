import React from 'react'
import { motion } from 'framer-motion'
import FlowerLogo from './FlowerLogo'
import NoahLogoAnimated from './NoahLogoAnimated'
import "./NoahLogoAnimation.css"
import "./FlowerLogo.css"
import ExpressiveAnimation from './ExpressiveAnimation'
import Navbar from '../Navbar/Navbar'
import "./SVGAnimations.css"

const SVGAnimations = () => {
  return (
    <motion.div
        initial={{y: '50vh'}}
      animate={{y: '0'}}
      exit={{y: '50vh', transition:{duration: .1}}} 
      className='SVGAni'>
      <Navbar />
      <h1 className='svg__caption'>Here are a few logos that are brought to life using SVGs, CSS and Javascript to animate them. SVG Animations have been an awesome way to combine creativity and technicality.</h1>
      <div className='animations'>
        <NoahLogoAnimated />
        <FlowerLogo />
        <ExpressiveAnimation />
      </div>
    </motion.div>
  )
}

export default SVGAnimations