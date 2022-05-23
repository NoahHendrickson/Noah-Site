import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from "../Navbar/Navbar"
import "./FullStory.css"
import TimelineButton from '../TimelineButton'
import FancyCarat from './FancyCarat'
import Noah from "../Assets/profilepic.jpeg"
import { ReactComponent as DownCarat } from "../Assets/Story/fancyDownCarat.svg"



const FullStory = (props) => {
  const [which, setWhich] = useState();
  const [cap, setCap] = useState({
    first: "I didnt have a direction or a good idea of what I really wanted to do. But I was creative and liked computers so this seemed like a reasonable thing to do.",
    second: "The summer I graduated I did not want to pursue a career in the Design field yet. I decided to apply to Amazon as a Warehouse worker and move some cube and earn some cash.",
    third: "Turns out working at Amazon would totally turn my life and attitude around. I was able to get back to my passions of problem solving and winning.",
    fourth: "Amazon was my first full time job and it helped me grow and develop professionally and personally. If I want to do something, I fully believe in my abilites to do said thing. Some call that delusional confidence and that is absolutely correct."
});

  const set = (which) => {
    setCap(which)
  }
  console.log(cap)

  return (
    <motion.div
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}} 
      className='FullStoryPage'>
      <Navbar />
      <div className='story__grid'>
        <div>
          <TimelineButton  text="Go to College for Graphic Design" />
        </div>
        <div className='span__6'>
          <div>
            <h1 className='which__container'>
              {which === "first child" ? cap.first :
                which === "second child" ? cap.second : 
                which === "third child" ? cap.third : 
                    which === "fourth child" ? cap.fourth : "Hover over the arrows to reveal story bits"}
            </h1>
          </div>
          <div>
            <div></div>
          </div>
          <div className='quote'>
            <h1 className='quote__caption'>
              "You should never settle for who you are."
            </h1>
            <p>-Michael Scott's way of saying that you should always be looking to improve yourself.</p>
            
          </div>
        </div>
        <div className='right__panel'>
        From a very young age I was obsessed with building things. I loved Legos, Duplos, Bionicles, bascically any toy that was slightly technical, was up my alley. As I look back on those years with a bit more wisdom on myself I realized I liked those toys but loved the feeling of building or creating my own original ideas. To this day I feel fulfilled and proud of building and creating beautiful products, designs and experiences.
        </div>
        <div  className='carat__holder'>
          <FancyCarat selector="first" setWhich={setWhich} />
          <motion.div
            animate={{ scale: [0, 0, 1, 1, 0] }}
            transition={{duration: 2, times: [0, .25, .5, .90, 1]}}
            className='hint'>Hover over the arrows!</motion.div>
        </div>
        <div>
          <TimelineButton text="Graduate and get a random job at Amazon in 2019" />
        </div>
        <div className='carat__holder'>
        <FancyCarat selector="second" setWhich={setWhich} />
        </div>
        <div>
          <TimelineButton text="Get promoted 3 times in 10 months to become an Area Manager" />
        </div>
        <div className='carat__holder'>
          <FancyCarat selector="third" setWhich={setWhich} />
        </div>
        <div>
          <TimelineButton text="Promoted again 1 year later in 2021" />
        </div>
        <div className='carat__holder'>
        <FancyCarat selector="four" setWhich={setWhich} />
        </div>
        <div>
          <TimelineButton text="Regained my confidence and left Amazon to pursue a career in Front End Developement" />
        </div>
      </div>
    </motion.div>
  )
}

export default FullStory