import React, {useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import box from "../Assets/NoahBrand/Process/Artboard1.svg"
import boxes from "../Assets/NoahBrand/Process/Artboard 1 copy.svg"
import logo from "../Assets/NoahBrand/Process/Artboard 1 copy 2.svg"
import slant from "../Assets/NoahBrand/Process/slant-03.svg"



const BrandAreaOne = () => {

  const projects = [
    {
      id: 1,
      img: box,
      class: "NoahBrandImage NoahBrandImageSquare"
    },
    {
      id: 2,
      img: boxes,
      class: "NoahBrandImage",
    },
    {
      id: 3,
      img: logo,
      class: "NoahBrandImage NoahBrandImageDark",
    },
    {
      id: 4,
      img: slant,
      class: "NoahBrandImage",
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

export default BrandAreaOne