import React from 'react'
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import { motion } from 'framer-motion'
import "./DarkMatterPage.css"
import { ReactComponent as Mocks } from "./Assets/DarkMatter/IphoneMocks-17.svg"
import screens1 from "./Assets/DarkMatter/banner-of-screens1.png"
import screens2 from "./Assets/DarkMatter/banner-of-screens2.png"
import Footer from './Footer'

const DarkMatterPage = () => {
  return (
    <motion.div className='DarkMatterPage'
      initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}}
    >
      <Navbar />
      <ProjectTitle title="Dark Matter" subtitle="UX Design" text="Dark Matter Network is an Art Piece and Gallery hosting app." role="Lead Designer" roleText="I was the lead designer for this project. I worked with the founder to create all the necessary screens and with the developer to streamline the design to develop process." />
      <Mocks className='mocks' />
      <img className="screens__DM" src={screens1}/>
      <img className="screens__DM" src={screens2} />
      <Footer />
    </motion.div>
  )
}

export default DarkMatterPage