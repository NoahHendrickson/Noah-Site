import React, { useEffect} from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import './ExpBox.css'
import { type } from '@testing-library/user-event/dist/type'
import { useInView } from 'react-intersection-observer'

const ExpBox = (props) => {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: .1 })
  
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
      x: entry,
      opacity: 0,
    },
  }

  const articles = [
    {
      key: 1, Title: 'Product Designer', subTitle: "", Time: "1YRs",
      Desc: "contracted as Lead UX Designer for two products currently under development",
      Desc2: "learning to code and deployed 2 personal React projects (you're exploring one of them right now)",
      Desc3: ""
    },
    {
      key: 2, Title: 'Designer', subTitle: "", Time: "5YRs",
      Desc: "freelance logo & graphic design",
    },
    {
      key: 3, Title: 'Area Manager', subTitle: "@ Amazon", Time: "1.5YRs",
      Desc: "led and collaborated with my team to increase shift productivity by 29%",
      Desc2: "promoted 3 times in 10 months",
      Desc3: "recognized as SME (subject matter expert) and selected to assist with the opening of a new building"
    },
  ]

  const variants = {
    visible: {
      opacity: 1,
      x: props.mobile === 45 ? 35 : 0,
    },
    hidden: {
      opacity: 0,
      x: "100%"
    },
  }

  return (
  <div className='ExpBox'>
      {articles.map((articles, i) => (
      <AnimatePresence onExitComplete={true}>
          <motion.div className='ExpBox2'
            key={articles.key}
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={variants}
            transition={{
              duration: 2,
              delay: i * .25,
              type: 'spring',
              stiffness: 80,
              mass: 1,
              damping: 8,
            }}
            onViewportLeave={variants}
        >
          <motion.h1 variants={variants} className='ExpTitle'>{articles.Title}
          {articles.subTitle ? <span className='ExpSubTitle'> {articles.subTitle}</span> : null}
          </motion.h1>
          <motion.h1 initial={{x: '1100%'}} variants={variants} className='ExpTime'>{articles.Time}</motion.h1>
          <motion.div variants={variants} className='ExpLine'></motion.div>
          <motion.h2 variants={variants} className='ExpDescription'>{articles.Desc}</motion.h2>
          {articles.Desc2 ? <motion.div variants={variants} className='ExpLine ExpLineShort'></motion.div> : null}
          <motion.h2 variants={variants} className='ExpDescription'>{articles.Desc2}</motion.h2>
          {articles.Desc3 ? <motion.div variants={variants} className='ExpLine ExpLineShort'></motion.div> : null}
          <motion.h2 variants={variants} className='ExpDescription'>{articles.Desc3}</motion.h2>
        </motion.div>
      </AnimatePresence>
    ))}
  </div>
  )
}

export default ExpBox