import React, {useEffect} from 'react'
import { motion, useAnimation, transform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LogoDesign from './LogoPage'
import Hyperglide from "../Assets/Logos/hyperglides-25.svg"
import TLH from "../Assets/Logos/TLH.svg"
import Beamen from "../Assets/Logos/BeamenLogo-21.svg"
import DORO from "../Assets/Logos/Doro-02.svg"
import BCLogo from "../Assets/Logos/BCLogo.svg"
import AbsurdUni from "../Assets/Logos/AbsurdUni.svg"
import DLT8 from '../Assets/Logos/DLT8-01.svg'
import DCL2 from "../Assets/Logos/dcl2-01.svg"
import BosciaRose from "../Assets/Logos/bosciarose-04.svg"
import Cercek from "../Assets/Logos/CercekTimbercraftLogo-01.svg"
import springside from "../Assets/Logos/springside-02.svg"
import Navbar from '../Navbar/Navbar'

const NewLogoArea = () => {

  const logos = [
    {
      id: 1,
      img: Hyperglide,
      color: "white",
    },
    {
      id: 2,
      img: DORO,
      color: "#5a99f8",
    },
    {
      id: 9,
      img: BosciaRose,
      color: "#7954A3",
    },
    {
      id: 11,
      img: springside,
      color: "black",
    },
    {
      id: 4,
      img: TLH,
      color: "#1F79FC",
    },
    {
      id: 3,
      img: DLT8,
      color: "#ee8114",
    },
    {
      id: 5,
      img: BCLogo,
      color: "lightgrey",
    },
    {
      id: 6,
      img: AbsurdUni,
      color: "coral",
    },
    {
      id: 7,
      img: DCL2,
      color: "white",
    },
    {
      id: 8,
      img: Beamen,
      color: "#5A563A",
    },
    {
      id: 10,
      img: Cercek,
      color: "lightgrey",
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
    logos.map((logo, i) => (
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
        className='LogoHolder'>
        <img style={{backgroundColor: logo.color}} className="LLL" src={logo.img} />
      </motion.div>
    ))
  )
}

export default NewLogoArea