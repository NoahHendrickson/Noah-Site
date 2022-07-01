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
import pictures from "../Assets/Iconography/Group 26.svg";
import key from "../Assets/Iconography/Group 27.svg";
import apartment from "../Assets/Iconography/Group 28.svg";
import apartment2 from "../Assets/Iconography/Group 29.svg";
import chat from "../Assets/Iconography/Group 30.svg";
import people from "../Assets/Iconography/Group 31.svg";
import calendar from "../Assets/Iconography/Group 32.svg";
import retweet from "../Assets/Iconography/Group 33.svg";
import reserve from "../Assets/Iconography/Group 34.svg";
import airplane from "../Assets/Iconography/Group 35.svg";
import share from "../Assets/Iconography/Group 47.svg";
import ticket from "../Assets/Iconography/Path 76.svg";
import arrow from "../Assets/Iconography/Path 87.svg";
import remove from "../Assets/Iconography/Path 104.svg";
import door from "../Assets/Iconography/Group 36.svg";
import horn from "../Assets/Iconography/Group 37.svg";
import dashboard from "../Assets/Iconography/Group 38.svg";
import list from "../Assets/Iconography/Group 39.svg";
import pin from "../Assets/Iconography/Group 40.svg";
import printer from "../Assets/Iconography/Group 41.svg";
import attention from "../Assets/Iconography/Group 42.svg";
import card from "../Assets/Iconography/Group 43.svg";
import select from "../Assets/Iconography/Group 44.svg";
import poke from "../Assets/Iconography/Group 45.svg";
import hammer from "../Assets/Iconography/Group 46.svg";
import sun from "../Assets/Iconography/Group 48.svg";
import planet from "../Assets/Iconography/Group 49.svg";
import striker from "../Assets/Iconography/Group 50.svg";
import network from "../Assets/Iconography/Group 51.svg";
import panels from "../Assets/Iconography/Group 52.svg";
import battery from "../Assets/Iconography/Group 53.svg";
import waves from "../Assets/Iconography/Group 54.svg";
import squares from "../Assets/Iconography/Group 55.svg";
import circles from "../Assets/Iconography/Group 56.svg";
import icecream from "../Assets/Iconography/Group 58.svg";
import document from "../Assets/Iconography/Path 150.svg";
import moon from "../Assets/Iconography/Path 155.svg";
import skull from "../Assets/Iconography/Path 190.svg";
import bolt from "../Assets/Iconography/Path 193.svg";
import wavelength from "../Assets/Iconography/Group 57.svg";

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
    {
      id: 8,
      img: pictures,
    },
    {
      id: 10,
      img: apartment,
    },
    {
      id: 11,
      img: apartment2,
    },
    {
      id: 12,
      img: chat,
    },
    {
      id: 13,
      img: people,
    },
    {
      id: 14,
      img: calendar,
    },
    {
      id: 15,
      img: retweet,
    },
    {
      id: 16,
      img: reserve,
    },
    {
      id: 17,
      img: airplane,
    },
    {
      id: 18,
      img: share,
    },
    {
      id: 19,
      img: ticket,
    },
    {
      id: 20,
      img: door,
    },
    {
      id: 21,
      img: remove,
    },
    {
      id: 22,
      img: arrow,
    },
    {
      id: 24,
      img: horn,
    },
    {
      id: 25,
      img: dashboard,
    },
    {
      id: 26,
      img: list,
    },
    {
      id: 27,
      img: pin,
    },
    {
      id: 28,
      img: printer,
    },
    {
      id: 29,
      img: attention,
    },
    {
      id: 30,
      img: card,
    },
    {
      id: 31,
      img: select,
    },
    {
      id: 32,
      img: poke,
    },
    {
      id: 33,
      img: hammer,
    },
    {
      id: 34,
      img: sun,
    },
    {
      id: 35,
      img: planet,
    },
    {
      id: 36,
      img: striker,
    },
    {
      id: 37,
      img: network,
    },
    {
      id: 38,
      img: panels,
    },
    {
      id: 39,
      img: battery,
    },
    {
      id: 40,
      img: waves,
    },
    {
      id: 41,
      img: squares,
    },
    {
      id: 42,
      img: circles,
    },
    {
      id: 43,
      img: icecream,
    },
    {
      id: 44,
      img: document,
    },
    {
      id: 45,
      img: moon,
    },
    {
      id: 46,
      img: skull,
    },
    {
      id: 47,
      img: bolt,
    },
    {
      id: 48,
      img: wavelength,
    },
    {
      id: 9,
      img: key,
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
      transition: {
        duration: .5
      }
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
          duration: .05,
          delay: i * .03,
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