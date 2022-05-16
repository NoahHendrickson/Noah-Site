import React from 'react'
import FlowerLogo from './FlowerLogo'
import NoahLogoAnimated from './NoahLogoAnimated'
import "./NoahLogoAnimation.css"
import "./FlowerLogoInfini.css"
import ExpressiveAnimation from './ExpressiveAnimation'
import Navbar from './Navbar'
import "./SVGAnimations.css"

const SVGAnimations = () => {
  return (
    <div className='SVGAni'>
      <Navbar />
      <h1 className='svg__caption'>Here are a few logos that are brought to life using SVGs, CSS and Javascript to animate them. SVG Animations have been an awesome way to combine creativity and technicality.</h1>
      <div className='animations'>
        <NoahLogoAnimated />
        <FlowerLogo />
        <ExpressiveAnimation />
      </div>
    </div>
  )
}

export default SVGAnimations