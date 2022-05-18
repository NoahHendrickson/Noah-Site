import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import NoahPFP from './NoahPFP'
import html from "./Assets/html-1.svg"
import css from "./Assets/css-3.svg"
import java from "./Assets/logo-javascript.svg"
import react from "./Assets/react-2.svg"
import "./StoryCarousel.css"
import { ReactComponent as CSS } from "./Assets/css-3.svg"
import { ReactComponent as JAVA } from "./Assets/logo-javascript.svg"
import { ReactComponent as HTML } from "./Assets/html-1.svg"
import { ReactComponent as REACT } from "./Assets/react-2.svg"

const StoryCarousel = ({story}) => {
 
  const screen = window.screen.width

  useEffect(() => {
    const container = document.querySelector(".orbit__container")
    // const orbit = container.querySelector(".orbit")

    for (let i = 0; i < 4; i++) {
      const orbit = document.createElement('div')
      // const clone = orbit.cloneNode(true)
      orbit.classList.add("orbit")

      const placement = Math.floor((i + 1) * 90);
      console.log(placement)
      const offsetOrbit = document.createElement("div")
      offsetOrbit.classList.add('icon')
      orbit.style.transformOrigin = `29.5px 100px`
      orbit.style.transform = `rotate(${placement === 360 ? 0 : placement}deg)`

      container.appendChild(orbit)
  };

  })
    


 

  return (
    <div className='storyCarousel'>
      {screen > 400 ?
      <NoahPFP css={css} java={java} react={react} html={html} Title="Developer" Text="I began my coding journey in January 2022. I am mostly self taught and have learned by doing. I have always loved building and learning and found coding to be a great combination. I am currently working to become a Front End App Developer but ultimately aspire to be a Full Stack App Developer." /> : null}
      <div className='NoahHeadShot'></div>
      <div className='orbit__container'>
      </div>
      {/* <div className='orbit__container'>
        <div className="orbit__offset orbit__offset--css" >
          <CSS className='logoIcon orbit__offset--css' />
        </div>
        <div className="orbit__offset orbit__offset--java" >
          <JAVA className='logoIcon orbit__offset--java' />
        </div>
        <div className="orbit__offset orbit__offset--html" >
          <HTML className='logoIcon orbit__offset--html' />
        </div>
        <div className="orbit__offset orbit__offset--react" >
          <REACT className='logoIcon orbit__offset--react' />
        </div>
      </div> */}
      {screen > 400 ? <NoahPFP Title="Designer" Text="I've been designing a lot longer than I've been developing. I graduated with a BA in Advertising and Graphic Design in 2019 but I had trouble finding passion and drive in just design. For that reason I did not dive into that career path. I took a couple years and have found my passion again. I love to design and build. I have found a ton of love for UX Design in the past year." /> : null}
      {screen <= 400 ? <NoahPFP Title="Designer & Developer" Text="My name is Noah I am a Graphic & UX Designer and self taught Junior Developer. I have recently discovered a love for building and creating apps. I enjoy designing apps and experiences but my true passion is building those experiences. Becoming a Front End App Developer is my goal." /> : null}
      <div className='story__button--container'>
        <motion.div whileHover={{ scale: 1.1 }}
        className='button__background greenDark customBttn__green button__padded'>
          <div className='button__front green customBttn__green'>
            <a className='button extraPaddingBttn'>See my full story</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default StoryCarousel