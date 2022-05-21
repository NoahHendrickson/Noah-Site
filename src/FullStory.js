import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from "./Navbar"
import pfp from "./"
import "./FullStory.css"
import TimelineButton from './TimelineButton'
import FancyCarat from './FancyCarat'
import Noah from "./Assets/profilepic.jpeg"
import { ReactComponent as DownCarat } from "./Assets/Story/fancyDownCarat.svg"



const FullStory = (props) => {
  const [which, setWhich] = useState();
  const [cap, setCap] = useState({
    first: "I was not ready to go to College when I did and ended up surpressing my core traits and drives.",
    second: "The summer I graduated I did not want to pursue a career in the Design field yet. I decided to apply to Amazon as a Warehouse worker and move some cube and earn some cash.",
    third: "Turns out working at Amazon would totally turn my life and attitude around. I was able to get back to my passions of problem solving and winning.",
    fourth: "fourth reason"
});

  const set = (which) => {
    setCap(which)
  }
  console.log(cap)

  return (
    <div className='FullStoryPage'>
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
                    which === "fourth child" ? cap.fourth : ""}
            </h1>
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
        <div  className='carat__holder'>
          <FancyCarat selector="first" setWhich={setWhich} />
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
        <div className='span__2'></div>
        <div className='carat__holder'>
          <FancyCarat selector="third" setWhich={setWhich} />
        </div>
        <div>
          <TimelineButton text="Promted again 1 year later in 2021" />
        </div>
        <div className='carat__holder'>
        <FancyCarat selector="four" setWhich={setWhich} />
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