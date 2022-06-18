import React, { useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Nacho from "../Assets/PortfolioThumbNails/limeStandard.svg"
import miniNacho from "../Assets/PortfolioThumbNails/limeMini.svg"
import HowTo from "../Assets/PortfolioThumbNails/standardPC.svg"
import miniPC from "../Assets/PortfolioThumbNails/MiniPc.svg"
import Fit from "../Assets/PortfolioThumbNails/fitStandard.svg"
import FitMini from "../Assets/PortfolioThumbNails/fitMini.svg"
import { Link } from 'react-router-dom'

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
      miniImg: miniPC,
      path: "/HowToPC"
    },
    {
      id: 2,
      title: 'Nacho Box',
      image: Nacho,
      miniImg: miniNacho,
      path: "/NachoBox"
    },
    {
      id: 3,
      title: 'Fit',
      image: Fit,
      miniImg: FitMini,
      path: "/Fitpage"
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
              damping: 15,
        }}
      >
        <Link className='LinkTouchArea' to={article.path}>
          <motion.div whileHover={{scale: 1.8}}  transition={{duration: .1}} className='ThumbnailHolder'>
            <img className="WorkIcon" src={article.image} />
            <div className='TheMini'>
              <img className="miniImage" src={article.miniImg} />
            </div>
          </motion.div>
          <h2 className='WorkTitle'>{article.title}</h2>
        </Link>
      </motion.div>
    ))
    
  )
}

export default NewGraphicArea