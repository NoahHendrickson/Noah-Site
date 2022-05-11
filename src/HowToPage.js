import React from 'react'
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import Infographic from "./Assets/HowToPC/infpgraphic-06.svg"
import Process from "./Assets/HowToPC/processpic-01.png"
import ProcessTwo from "./Assets/HowToPC/processpic-02.svg"

const HowToPage = () => {
  return (
    <div className='HowToPage'>
      <Navbar />
      <div className='content'>
        <ProjectTitle title="How To Build a PC" subtitle="Graphic Design" text="I am a tech enthusiast so of course I build my own computers. I wanted to create a supplemental infograph for building a custom PC. The goal of this guide isn't to get into detail about each step but rather give an overview and suggest an order of process to make the experience easier." />
        <div className='images'>
        <div className='process__images--howto'>
            <div className='process__images--six iconRam'></div>
            <div className='process__images--six iconCooler'></div>
            <div className='process__images--six iconMobo'></div>
            <div className='process__images--six iconGpu'></div>
            <div className='process__images--six iconCpu'></div>
          </div>
          <h1 className='caption'>Here is my completely organized beautiful process for creating the icons</h1>
          <img className='hero__image' src={Process} />
          <h1 className='caption'>I went straight to digital sketches and concepts because I knew I wanted a very clean hard line graphic style.</h1>
          <img className='hero__image white' src={ProcessTwo} />
         
          <h1 className='caption'>The guide took the form of a vertical infograph for easy web and mobile use</h1>
          <img className='hero__image' src={Infographic} />
        </div>
      </div>
    </div>
  )
}

export default HowToPage