import React, {useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import greenCamo from "../Assets/NoahBrand/SVG/Artboard 29.svg"
import purpCamo from "../Assets/NoahBrand/SVG/Artboard 29 copy.svg"
import yellowCamo from "../Assets/NoahBrand/SVG/Artboard 29 copy 2.svg"
import blueCamo from "../Assets/NoahBrand/SVG/Artboard 29 copy 3.svg"

const BrandAreaFive = () => {
  const projects = [
    {
      id: 1,
      img: greenCamo,
      class: "NoahBrandImage"
    },
    {
      id: 2,
      img: purpCamo,
      class: "NoahBrandImage"
    },
    {
      id: 3,
      img: yellowCamo,
      class: "NoahBrandImage"
    },
    {
      id: 4,
      img: blueCamo,
      class: "NoahBrandImage"
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

export default BrandAreaFive