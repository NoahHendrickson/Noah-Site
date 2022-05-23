import React from 'react'
import Navbar from '../Navbar/Navbar'
import DarkMatterLogo from "../Assets/DarkMatter/DarkMatterLogo-07.svg"
import HomelyLogo from "../Assets/HomelyApp/HomelyLogo-03.svg"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./UXPage.css"

const UXPage = () => {
  return (
    <motion.div className='UXPage'
     initial={{y: '-50vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .35}}} >
      <Navbar />
      <div className='projects'>
        <Link className="project__Link project__Link--homely" to="/HomelyPage">
          <div className="project">
            <img className="hero__images--UX homely__logo" src={HomelyLogo} />
          </div>
        </Link>
        <Link className="project__Link" to="/DarkMatter">
          <div className="project">
            <img className="hero__images--UX" src={DarkMatterLogo} />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default UXPage