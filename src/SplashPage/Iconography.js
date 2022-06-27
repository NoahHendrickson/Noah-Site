import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Home from "../Assets/Iconography/Group19.svg";
import Wing1 from "../Assets/Iconography/Group 20.svg";
import Global from "../Assets/Iconography/Group 21.svg";
import Lock from "../Assets/Iconography/Group22.svg";
import Wing2 from "../Assets/Iconography/Group 23.svg";
import Musicnote from "../Assets/Iconography/Group 24.svg";
import Gesture from "../Assets/Iconography/Group 25.svg";

const Iconography = () => {
  const icons = [
    {
      id: 1,
      img: Home,
    },
    {
      id: 2,
      img: Wing1,
    },
    {
      id: 3,
      img: Global,
    },
    {
      id: 4,
      img: Lock,
    },
    {
      id: 5,
      img: Wing2,
    },
    {
      id: 6,
      img: Musicnote,
    },
    {
      id: 7,
      img: Gesture,
    },
  ]

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0 })
  
  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView]);

  const variants2 = {
    visible: {
      x: 0,
      opacity: 1,
    },
    
    hidden: {
      x: "100%",
      opacity: 0,
      // transition: {
      //   duration: .5
      // }
    },
  }

  return (
    icons.map((icon, i) => (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={variants2}
        transition={{
          duration: .25,
          delay: i * .1,
          type: 'spring',
              stiffness: 80,
              mass: 1,
              damping: 10,
        }}
        className='IconHolder'>
        <img className="iconography" style={{backgroundColor: icon.color}} src={icon.img} />
      </motion.div>
    ))
  )
}

export default Iconography