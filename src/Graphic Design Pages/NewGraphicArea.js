import React, { useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Nacho from "../Assets/Fit/SVG/Artboard1.svg"
import HowTo from "../Assets/Fit/SVG/Artboard2.svg"
import Fit from "../Assets/Fit/SVG/Artboard3.svg"

const NewGraphicArea = () => {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: .6 })
  
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
    },
  }

  const projects = [
    {
      id: 1,
      title: 'How To',
      image: HowTo,

    },
    {
      id: 2,
      title: 'Nacho Box',
      image: Nacho,
    },
    {
      id: 3,
      title: 'Fit',
      image: Fit,
    },
  ]

  return (
    projects.map((article, i) => (
      <motion.div className='UXArea'
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
              damping: 10,
        }}
      >
        <div>
          <div className='ThumbnailHolder'>
            <img className="WorkIcon" src={article.image} />
          </div>
          <h2 className='WorkTitle'>{article.title}</h2>
        </div>
      </motion.div>
    ))
    
  )
}

export default NewGraphicArea