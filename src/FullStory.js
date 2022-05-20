import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from "./Navbar"
import pfp from "./"
import "./FullStory.css"
import TimelineButton from './TimelineButton'
import FancyCarat from './FancyCarat'
import Noah from "./Assets/profilepic.jpeg"


const FullStory = () => {

  const [cap, setCap] = useState([]);

  function firstCap() {
    setCap("first cap");
    console.log(cap)
  }

  return (
    <div className='FullStoryPage'>
      <Navbar />
      <div className='story__grid'>
        <div>
          <TimelineButton  text="Go to College for Graphic Design" />
        </div>
        <div className='span__6'>
          <div>
            <h1 className='caption__timeline'>The text in here will be dependant on what section is hovered on</h1>
          </div>
          <div>
            <div></div>
          </div>
          <div className='quote'>
            <h1>
              "You should never settle for who you are."
            </h1>
            <p>-Michael Scott's way of saying that you should always be looking to improve yourself and achieve greatness.</p>
            
          </div>
        </div>
        <div className='span__2'>
        From a very young age I was obsessed with building things. I loved Legos, Duplos, Bionicles and many other building/architectirl toys. As I look back on those years with a bit more wisdom on myself I realized I liked those toys but loved the feeling of building or creating my own original ideas. To this day I feel fulfilled and proud of building and creating beautiful products, designs and experiences.
        </div>
        <div onMouseOver={firstCap} className='carat__holder'>
          <FancyCarat />
        </div>
        <div>
          <TimelineButton text="Graduate and get a random job at Amazon in 2019" />
        </div>
        <div className='carat__holder'>
          <FancyCarat />
        </div>
        <div>
          <TimelineButton text="Get promoted 3 times in 10 months to become an Area Manager" />
        </div>
        <div className='span__2'></div>
        <div className='carat__holder'>
          <FancyCarat />
        </div>
        <div>
          <TimelineButton text="Promted again 1 year later in 2021" />
        </div>
        <div className='carat__holder'>
          <FancyCarat />
        </div>
        <div>
          <TimelineButton text="Regained my confidence and left Amazon to pursue a career in Front End Developement" />
        </div>
        <div className='span__2'></div>
      </div>
    </div>
  )
}

export default FullStory