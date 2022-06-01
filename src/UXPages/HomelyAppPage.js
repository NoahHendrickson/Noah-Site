import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import "./HomelyAppPage.css"
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import Wires from "../Assets/HomelyApp/HomelyImages-07.svg"
import Styles from "../Assets/HomelyApp/FontFamily-08.svg"
import StyleGuide from "../Assets/HomelyApp/HomelyImages-09.svg"
import StyleGuideDark from "../Assets/HomelyApp/HomelyImages-10.svg"
import Mocks2 from "../Assets/HomelyApp/homelyNew-01.svg"
import Mocks from "../Assets/HomelyApp/homelyNew-03.svg"
import Screens from "../Assets/HomelyApp/homelyNew-02.svg"
import PitchDeck1 from "../Assets/HomelyApp/1x/copy2.png"
import PitchDeck2 from "../Assets/HomelyApp/PitchDeck2.png"
import { useInView } from 'react-intersection-observer'

const HomelyAppPage = () => {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: .5 })
  
  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 70,
        stiffness: 1000,
      },
    },
    hidden: {
      y: entry,
      opacity: 0,
      scale: 0,
      transition: {
      }
    },
  }

  return (
    <motion.div className='HomelyPage'
      initial={{y: '100vh',}}
      animate={{y: '0'}}
      exit={{y: '-100vw', transition:{duration: .1}}}
    >
      <Navbar />
      <ProjectTitle page="projectText__padded" role="Principal Designer & Junior Developer" title="Homely App" subtitle="UX Design & App Development" text="Homely is property and tenant management software designed to streamline communication between the office and tenants." />
      <img className="hero__image--full" src={PitchDeck1} />
      <img className="hero__image--full pitchDeck" src={PitchDeck2} />
      <motion.img
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variants}
        className="hero__image--70 homely__margins" src={Wires} />
      <motion.img className="hero__image--70" src={Styles} />
      <img className="homely__95" src={StyleGuide} />
      <img className="homely__95" src={StyleGuideDark} />
      <img className="homely__95" src={Mocks} />
      <img className="homely__95" src={Screens} />
    </motion.div>
  )
}

export default HomelyAppPage