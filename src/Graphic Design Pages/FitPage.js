import React from 'react'
import { motion } from 'framer-motion'
import "./FitPage.css"
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import fitOne from "../Assets/Fit/iconsFit-11.svg"
import fitTwo from "../Assets/Fit/iconsFit-12.svg"
import fitThree from "../Assets/Fit/iconsFit-13.svg"
import fitFour from "../Assets/Fit/iconsFit-14.svg"
import patternBanner from "../Assets/Fit/patternFit-15.svg"
import Mockup from "../Assets/Fit/socksmockup.jpg"
import FooterNav from '../FooterNav'

const FitPage = () => {
  return (
    <motion.div className='FitPage'
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}}
    >
      <Navbar />
      <ProjectTitle title="So(cc)ks" subtitle="Pattern & Package Design" text="This is a small pattern project that I decided to take a step further and implement on some packaging mockups for (thicc) athletic socks." />
      <div className='page'>
        <div className='imgGrid'>
          <img className="fit__images topLeft" src={fitOne} />
          <img className="fit__images topRight" src={fitTwo} />
          <img className="fit__images bottomLeft" src={fitThree} />
          <img className="fit__images bottomRight" src={fitFour} />
        </div>
        <img className="hero__image--70" src={patternBanner} />
        <img className="hero__image--70" src={Mockup} />
      </div>
      <FooterNav />
    </motion.div>
  )
}

export default FitPage