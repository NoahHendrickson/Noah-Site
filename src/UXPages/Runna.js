import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import "./Runna.css"
import SplineThing from './SplineThing'
import PinkScreen from "../Assets/Runna/PinkScreenMock.svg"
import GreenScreen from "../Assets/Runna/GreenScreenLeanLeft.svg"
import GreenScreen2 from "../Assets/Runna/GreenScreenLeanRight.svg"
import PurpleScreen from "../Assets/Runna/PurpleScreen.svg"

const Runna = () => {
  return (
    <div className='Runna'>
      <Navbar />
      <ProjectTitle role="Creator" title="Runna" subtitle="UX Design & App Conecpt" text="Runna is a barebones idea I have for a running app. I want to create an interactive and competitve experience through social media. This project is currently a work in progress" />
      <div className='RunnaContent'>
        <div className='HeroContent'>
          <div className='HeroContent__text'>
            <div className='GradientStripe'></div>
            <h1>Race against songs</h1>
            <h1>Race against your friends</h1>
            <h1>Race against everyone</h1>
            <h2>Runna is an app concept I have with a goal of gamifying going for a run. I’m someone who has no problem sprinting for hours during a tennis match, soccer game etc. BUT running for fun? Thats a hard sell. Runna gives you something to run against</h2>
            <div className='GradBG'>
              <h1>Music</h1>
            </div>ha
          </div>
          <img className="RunnaImage" src={PinkScreen} />
        </div>
        <div className='HeroContent'>
          <div className='GradientStripe2'>
            <h1>See how you stack up against the world. Competition and gamifying your runs to become your best self</h1>
          </div>
          <img  className="RunnaImageLean" src={GreenScreen} />
          <img  className="RunnaImageLean abso" src={GreenScreen2} />
          <div className='HeroContent__text'>
           
          </div>
        </div>
        <div className='HeroContent'>
          <div className='GradientStripe3'>
            <h1>Set up multiple squads to race your friends and talk some smack </h1>
          </div>
          <img className="RunnaImagePurple" src={PurpleScreen} />
        </div>
      </div>
    </div>
  )
}

export default Runna