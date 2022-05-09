import React from 'react'
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'

const HowToPage = () => {
  return (
    <div className='HowToPage'>
      <Navbar />
      <div className='content'>
        <ProjectTitle title="How To Build a PC" subtitle="Graphic Design" text="Somehting blah blah about this project" />
        <div className='images'>
          <div className='process__images--howto'>
            <div className='process__images--six iconRam'></div>
            <div className='process__images--six iconCooler'></div>
            <div className='process__images--six iconMobo'></div>
            <div className='process__images--six iconGpu'></div>
            <div className='process__images--six iconCpu'></div>
          </div>
          <h1 className='caption'>Im a nerd so i made a pc thing</h1>
        </div>
      </div>
    </div>
  )
}

export default HowToPage