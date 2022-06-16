import React, { useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HomelyTHMB from "../Assets/PortfolioThumbNails/HomelyStandard.svg"
import HomelyMini from "../Assets/PortfolioThumbNails/HomelyMini.svg"
import DarkMatterMini from "../Assets/PortfolioThumbNails/DarkMatterMini.svg"
import DarkMatterTHMB from "../Assets/PortfolioThumbNails/DarkMatterStandard.svg"



const NewUXArea = () => {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 1 })
  
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
      title: 'Homely App',
      image: HomelyTHMB,
      miniImage: HomelyMini,

    },
    {
      id: 2,
      title: 'Dark Matter Network',
      image: DarkMatterTHMB,
      miniImage: DarkMatterMini,
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
          <motion.div whileHover={{scale: 2}} className='ThumbnailHolder'>
            <img className="WorkIcon" src={article.image} />
            <div className='TheBlur'></div>
            <div className='TheMini'>
              <img className="miniImage" src={article.miniImage} />
            </div>
          </motion.div>
          <h2 className='WorkTitle'>{article.title}</h2>
        </div>
      </motion.div>
    ))
    
  )
}

export default NewUXArea