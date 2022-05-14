import React from 'react'
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import { motion } from 'framer-motion'
import "./DarkMatterPage.css"
import { ReactComponent as Mocks } from "./Assets/DarkMatter/iphoneMocks-01-01.svg"
import screens from "./Assets/DarkMatter/screensImages-02.svg"
import Footer from './Footer'

const DarkMatterPage = () => {
  return (
    <motion.div className='DarkMatterPage'
      initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}}
    >
      <Navbar />
      <ProjectTitle title="Dark Matter" subtitle="UX Design" text="Dark Matter Network is an Art Piece and Art Gallery hosting app." role="Lead Designer" roleText="I was the lead designer for this project. I worked with the founder to create all the necessary screens and with the developer to streamline the design to implement process." />
      <Mocks className='mocks' />
      <img className="screens__DM" src={screens}/>
      <Footer />
    </motion.div>
  )
}

export default DarkMatterPage