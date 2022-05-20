import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import "./TheCRPO.css"
import crpo from "./Assets/CRPO/crpoPRev.jpg"
import crpo2 from "./Assets/CRPO/crpoPRev2.svg"
import Footer from './Footer'
import heroImage from "./Assets/CRPO/2x/heromockup.png"

const TheCRPO = () => {
  return (
    <motion.div className='CrpoPage'
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .4}}} 
    >
      <Navbar />
      <ProjectTitle title="The CRPO" subtitle="Web App" text="The CRPO is short for Crypto Portfolio. I wanted to create an App that allows you to simply track your entire portfolio by entering your holdings manually. No need to connect wallets or accounts." />
      <img className="hero__image--crpo" src={heroImage} />
      <div className='crpo__preview'>
        <div className='caption__inline'>
        <motion.div whileHover={{scale: 1.1}} className='button__background customBttn'>
        <div className='button__front customBttn'>
          <a href="https://thecrpo.com/" target="_blank" className='button'>CRPO</a>
        </div>
        </motion.div>
          <h1 className='crpo__caption'>I wasn't only motivated by my own crypto interests but also at the chance to learn and experiment. My vision for this app included interactivity, API calls and live crypto prices via websockets. I first broke it down in my head. I needed to take user input, then search the API for the input value and open a websocket for the value. I sincerely thank Youtube University for helping through this project.</h1>
          {/* <h1 className='crpo__caption'>I first broke it down in my head. I needed to take user input, then search the API for the input value and open a websocket for the value. I sincerely thank Youtube University for helping through this project.</h1> */}
        </div>
       
      </div>
    </motion.div>
  )
}

export default TheCRPO