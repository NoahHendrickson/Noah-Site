import React, {useEffect} from 'react'
import { motion, transform, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import lego1 from "../Assets/NoahBrand/Process/Artboard 1 copy 3-04.svg"
import lego2 from "../Assets/NoahBrand/Process/Artboard 1 copy 4-05.svg"
import BG from "../Assets/NoahBrand/flowerBGcolors.png"
import BG1 from "../Assets/NoahBrand/2x/orgred.png"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NoahLogoAnimated from '../CodeStuff/NoahLogoAnimated'
import BrandAreaOne from './BrandAreaOne'
import BrandAreaTwo from './BrandAreaTwo'
import BrandAreaThree from './BrandAreaThree'
import BrandAreaFour from './BrandAreaFour'

const NoahBrandContent = () => {

  const words = [
    {
      id: 1,
      words: "I spent most of my childhood buried in Lego bins. I was obsessed with building my own ideas and loved building something from scratch.",
    },
    {
      id: 2,
      words: "I wanted my logo to be built in the same way you build with Lego bricks by stacking and connecting identical pieces to eachother",
    },
    {
      id: 3,
      words: "My style and aesthetic is bold & minimal. I wanted my logo to be capable of adapting different styles as I love experimenting with new vibes and looks",
    },
  ]

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

  return (
      <div className='BrandContent'>
        <BrandAreaOne />
        <div className='BrandText'>
          <h1>{words[0].words}</h1>
          <h1>{words[1].words}</h1>
      </div>
      <BrandAreaFour />
      <div className='BrandText'>
          <h1>{words[2].words}</h1>
      </div>
      <BrandAreaThree />
      <BrandAreaTwo />
      </div>
  )
}

export default NoahBrandContent