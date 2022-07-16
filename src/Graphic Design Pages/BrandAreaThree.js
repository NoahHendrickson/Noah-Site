import React, {useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import greenNoah from "../Assets/NoahBrand/SVG/Artboard 17.svg"
import purpleNoah from "../Assets/NoahBrand/SVG/Artboard 18.svg"
import pinkNoah from "../Assets/NoahBrand/SVG/Artboard 19.svg"

const BrandAreaThree = () => {
  const projects = [
    {
      id: 1,
      img: purpleNoah,
      class: "BrandImageThirds green1"
    },
    {
      id: 2,
      img: greenNoah,
      class: 'BrandImageThirds purple',
    },
    {
      id: 2,
      img: pinkNoah,
      class: 'BrandImageThirds pink',
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
    projects.map((project, i) => (
      <motion.img
        src={project.img}
        className={project.class}
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={variants2}
        transition={{
          duration: 3,
          delay: i * .5,
          type: 'spring',
              stiffness: 80,
              mass: 1,
              damping: 15,
        }}
      />
        
    
    ))
  )
}

export default BrandAreaThree