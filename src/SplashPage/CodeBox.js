import React, {useEffect} from 'react'
import { motion, useAnimation, transform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const CodeBox = () => {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: .2  })
  
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

  const projetcs = [
    {
      title: "The Crpo",
      description: "A simple tool you manually enter your holdings in to and get a portfolio view",
      toolsTitle: "Tools used",
      tools: "React JS, CoinGecko API, Binance Websockets, Chart JS",
      path: "/CrpoPage",
      target: "",
    },
    {
      title: "Javascript Calculator",
      description: "The honorary badge of a self taught developer",
      toolsTitle: "Tools used",
      tools: "...Javascript",
      path: "https://noahhendrickson.github.io/calculator/",
      target: "_blank"
    },
    {
      title: "SVG Animations",
      description: "Animations made with CSS and Javascript",
      toolsTitle: "Tools used",
      tools: "CSS, Javascript, Framer Motion, Parallax React Package",
      path: "/SVGAnimations",
      target: "",
    },
    {
      title: "This Site",
      description: "I am building this site from scratch using React",
      toolsTitle: "Tools used",
      tools: "React, Framer Motion, Parallax React Package, React Router",
      path: "https://github.com/NoahHendrickson/Noah-Site",
      target: "_blank"
    },
  ]
  return (
    projetcs.map((article, i) => (
      <motion.div
        whileHover={{scale:1.1, transition: {duration: .2}}}
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
        className='CodeArea'>
        <a target={article.target} href={article.path}>
          <h1 className='CodeTitle'>{article.title}</h1>
          <div>
            <span className='ExpDescription'>{article.description}</span>
          </div>
          <span className='CodeTools'>{article.tools}</span>
        </a>
      </motion.div>
    ))
  )
}

export default CodeBox