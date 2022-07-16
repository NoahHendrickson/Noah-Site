import React, {useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import blue80s from "../Assets/NoahBrand/SVG/Artboard 15.svg"
import red80s from "../Assets/NoahBrand/SVG/Artboard 16.svg"

const BrandAreaTwo = () => {
  const projects = [
    {
      id: 1,
      img: blue80s,
      class: "BrandImageHalf blue"
    },
    {
      id: 2,
      img: red80s,
      class: 'BrandImageHalf red',
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
          duration: 1,
          delay: i * .25,
          type: 'spring',
              stiffness: 80,
              mass: 1,
              damping: 15,
        }}
      />
        
    
    ))
  )
}

export default BrandAreaTwo