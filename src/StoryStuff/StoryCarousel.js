import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NoahPFP from './NoahPFP'
import "./StoryCarousel.css"
import { ReactComponent as CSS } from "../Assets/css-3.svg"
import { ReactComponent as JAVA } from "../Assets/logo-javascript.svg"
import { ReactComponent as HTML } from "../Assets/html-1.svg"
import { ReactComponent as REACT } from "../Assets/react-2.svg"
import { ReactComponent as ILLU } from "../Assets/illustrator.svg"
import { ReactComponent as INDESIGN } from "../Assets/indesign.svg"
import { ReactComponent as PHOTOSHOP } from "../Assets/photoshop-2.svg"
import { ReactComponent as XD } from "../Assets/adobe-xd-2.svg"
import { Link } from 'react-router-dom'

const StoryCarousel = ({story}) => {
 
  const screen = window.screen.width

  // useEffect(() => {
  //   const container = document.querySelector(".orbit__container")
  //   // const orbit = container.querySelector(".orbit")

  //   for (let i = 0; i < 4; i++) {
  //     const orbit = document.createElement('div')
  //     // const clone = orbit.cloneNode(true)
  //     orbit.classList.add("orbit")

  //     const placement = {i === 0 ? 80 : i === 2 ?}
  //     // const placement = Math.floor((i + 1) * 90);
  //     const offsetOrbit = document.createElement("div")
  //     offsetOrbit.classList.add('icon')



  //     // orbit.style.transformOrigin = `29.5px 100px`
  //     // orbit.style.transform = `rotate(${placement === 360 ? 0 : placement}deg)`

  //     container.appendChild(orbit)
  // };

  // })
    

  const growUp = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  }
 

  return (
    <AnimatePresence onExitComplete={true}>
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0}}
      className='storyCarousel'>
      {screen > 400 ?
      <NoahPFP Title="Developer" Text="I began my coding journey in January 2022. I am mostly self taught by way of Codecademy, Stack Overflow and most importantly Youtube University. I love building experiences that are beautiful and intuitive. I am currently working to become a Front End App Developer." /> : null}
      <div className='NoahHeadShot'></div>
      <div className='orbit__container'>
      </div>
      <div className='orbit__container'>
        <div className="orbit__offset orbit__offset--css" >
          <CSS className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--illu" >
          <ILLU className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--java" >
          <JAVA className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--photoshop" >
          <PHOTOSHOP className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--html" >
          <HTML className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--indesign" >
          <INDESIGN className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--react" >
          <REACT className='logoIcon' />
        </div>
        <div className="orbit__offset orbit__offset--xd" >
          <XD className='logoIcon' />
        </div>
      </div>
      {screen > 400 ? <NoahPFP Title="Designer" Text="I've been designing a lot longer than I've been coding. I graduated with a BA in Advertising and Graphic Design in 2019. I have found a ton of love for UX Design in the past year because it is so closely tied to developement and I love coding as well. If you like my work and need some design help please reach out!" /> : null}
      {screen <= 400 ? <NoahPFP Title="Designer & Developer" Text="Thanks for checking out my site, I'm Noah and I am a UX Designer and self taught Developer. I have been designing a lot longer than I've been coding but I am certain this is the path for me. I love problem solving and learning new skills. My ultimate goal is to become a Front End Engineer." /> : null}
      </motion.div>
    </AnimatePresence>
  )
}

export default StoryCarousel