import React, {useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import flower from "../Assets/NoahBrand/SVG/Artboard 25.svg"
import flower2 from "../Assets/NoahBrand/SVG/Artboard 26.svg"
import flower3 from "../Assets/NoahBrand/SVG/Artboard 27.svg"
import flower4 from "../Assets/NoahBrand/SVG/Artboard 28.svg"

const BrandAreaFour = () => {
  const projects = [
    {
      id: 1,
      img: flower,
      class: "NoahBrandImage"
    },
    {
      id: 2,
      img: flower2,
      class: "NoahBrandImage"
    },
    {
      id: 3,
      img: flower3,
      class: "NoahBrandImage"
    },
    {
      id: 4,
      img: flower4,
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

export default BrandAreaFour