import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import LogoSquare from './LogoSquare'
import Hyperglide from "./Assets/Logos/hyperglides-25.svg"
import TLH from "./Assets/Logos/TLH.svg"
import Beamen from "./Assets/Logos/BeamenLogo-21.svg"
import DORO from "./Assets/Logos/Doro-02.svg"
import Navbar from './Navbar'

const LogoDesign = () => {
  return (
    <motion.div
      className='LogoDesign'
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}} 
    >
      <div className='header'>
        <Navbar />
      </div>
      <div className='logo__page'>
        <h1>These are my Logos</h1>
        <div className='logo__designs'>
          <LogoSquare src={Hyperglide}/>
          <LogoSquare src={Hyperglide}/>
          <LogoSquare src={Hyperglide}/>
          <LogoSquare src={Hyperglide}/>
          <LogoSquare src={TLH} />
          <LogoSquare src={TLH} />
          <LogoSquare src={Beamen} />
          <LogoSquare src={DORO} />
          <LogoSquare src={DORO} />
          <LogoSquare src={Beamen} />
        </div>
      </div>
    </motion.div>
  )
}

export default LogoDesign