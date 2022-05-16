import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import "./TheCRPO.css"
import crpo from "./Assets/CRPO/crpoPRev.jpg"
import crpo2 from "./Assets/CRPO/crpoPRev2.svg"
import Footer from './Footer'

const TheCRPO = () => {
  return (
    <motion.div className='CrpoPage'
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .4}}} 
    >
      <Navbar />
      <ProjectTitle title="The CRPO" subtitle="Web App" text="The CRPO is short for Crypto Portfolio. Investing in crypto is alot different than stocks. If you are invested in crpyto you probably have multipe places where your crypto is stored. I wanted to create an App that allows you to simply track your entire portfolio by entering your holdings manually. No needing to connect wallets or accounts." />
      <div className='crpo__preview'>
        <div className='caption__inline'>
        <img className="hero__image--50" src={crpo2} />
          <h1 className='crpo__caption'>This project is my baby. Its the first web app I ever created. It was a good way to teach myself JS and React. I knew it would invovle interactivty, API calls and web sockets for which I had zero experience using before developing this app. </h1>
          <motion.div whileHover={{scale: 1.1}} className='button__background customBttn'>
          <div className='button__front customBttn'>
            <a href="https://thecrpo.com/" target="_blank" className='button'>CRPO</a>
          </div>
        </motion.div>
        </div>
       
      </div>
    </motion.div>
  )
}

export default TheCRPO