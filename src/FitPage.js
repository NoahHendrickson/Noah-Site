import React from 'react'
import { motion } from 'framer-motion'
import "./FitPage.css"
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import fitOne from "./Assets/Fit/iconsFit-11.svg"
import fitTwo from "./Assets/Fit/iconsFit-12.svg"
import fitThree from "./Assets/Fit/iconsFit-13.svg"
import fitFour from "./Assets/Fit/iconsFit-14.svg"
import patternBanner from "./Assets/Fit/patternFit-15.svg"
import Footer from './Footer'
import Mockup from "./Assets/Fit/socksmockup.jpg"

const FitPage = () => {
  return (
    <motion.div className='FitPage'
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}}
    >
      <Navbar />
      <ProjectTitle title="So(cc)ks" subtitle="Pattern & Package Design" text="This is a small pattern project that I decided to take a step further and implement on some packaging mockups for athletic socks." />
      <div className='page'>
        <div className='imgGrid'>
          <img className="fit__images topLeft" src={fitOne} />
          <img className="fit__images topRight" src={fitTwo} />
          <img className="fit__images bottomLeft" src={fitThree} />
          <img className="fit__images bottomRight" src={fitFour} />
        </div>
        <img className="hero__image--70" src={patternBanner} />
        <h1 className='caption'>After creating the icons and patterns I put together a concept for the packing.</h1>

        <img className="hero__image--70" src={Mockup} />
      </div>
      <Footer />
    </motion.div>
  )
}

export default FitPage