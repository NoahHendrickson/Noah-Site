import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import "./TheCRPO.css"
import crpo from "../Assets/CRPO/crpoPRev.jpg"
import crpo2 from "../Assets/CRPO/crpoPRev2.svg"
import heroImage from "../Assets/CRPO/2x/heromockup.png"
import FooterNav from '../FooterNav'

const TheCRPO = () => {
  return (
    <motion.div className='CrpoPage'
      initial={{y: '50vh'}}
      animate={{y: '0'}}
      exit={{y: '50vh', transition:{duration: .1}}} 
    >
      <Navbar />
      <ProjectTitle title="The CRPO" subtitle="Web App" text="The CRPO is short for Crypto Portfolio. I wanted to create an App that allows you to simply track your entire portfolio by entering your holdings manually. No need to connect wallets or accounts." />
      <a href='https://thecrpo.com/' target="_blank">
        <img href="" className="hero__image--crpo" src={heroImage} />
      </a>
      <div className='crpo__preview'>
       
      </div>
      <FooterNav />
    </motion.div>
  )
}

export default TheCRPO