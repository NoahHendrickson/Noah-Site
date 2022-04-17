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
    <motion.div className='logo__page'
     initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .2}}} 
    >
        <h1>These are my Logos</h1>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
        <div className='logo__design'>
          <LogoSquare src={Hyperglide}/>
          <LogoSquare src={TLH} />
          <LogoSquare src={Beamen} />
          <LogoSquare src={DORO} />
          <LogoSquare src={Beamen} />
        </div>
    </motion.div>
  )
}

export default LogoDesign