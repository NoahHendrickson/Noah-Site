import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import Infographic from "../Assets/HowToPC/infographic-06-06-06.svg"
import Process from "../Assets/HowToPC/processpic-01.png"
import ProcessTwo from "../Assets/HowToPC/processpic-02.svg"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FooterNav from '../FooterNav'

const HowToPage = () => {
  return (
    <motion.div className='HowToPage'
    initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}} 
    >
      <Navbar />
      <div className='content'>
        <ProjectTitle title="How To Build a PC" subtitle="Graphic Design" text="I am a tech enthusiast, so of course I build my own computers. I wanted to create a supplemental infograph for building a custom PC. The goal of this guide isn't to get into detail about each step but rather give an overview and suggest an order of process to make the experience easier." />
        <div className='images'>
          <div className='process__images--howto'>
            <div className='process__images--six iconRam'></div>
            <div className='process__images--six iconCooler'></div>
            <div className='process__images--six iconMobo'></div>
            <div className='process__images--six iconGpu'></div>
            <div className='process__images--six iconCpu'></div>
          </div>   
          <img className='hero__image' src={Infographic} />
        </div>
        <FooterNav />
      </div>
    </motion.div>
  )
}

export default HowToPage