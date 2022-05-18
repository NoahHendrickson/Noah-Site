import React from 'react'
import { motion } from 'framer-motion'
import "./HomelyAppPage.css"
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import Wires from "./Assets/HomelyApp/HomelyImages-07.svg"
import Styles from "./Assets/HomelyApp/FontFamily-08.svg"
import StyleGuide from "./Assets/HomelyApp/HomelyImages-09.svg"
import StyleGuideDark from "./Assets/HomelyApp/HomelyImages-10.svg"
import Mocks2 from "./Assets/HomelyApp/homelyNew-01.svg"
import Mocks from "./Assets/HomelyApp/homelyNew-03.svg"
import Screens from "./Assets/HomelyApp/homelyNew-02.svg"
import PitchDeck1 from "./Assets/HomelyApp/PitchDeck1.png"
import PitchDeck2 from "./Assets/HomelyApp/PitchDeck2.png"

const HomelyAppPage = () => {
  return (
    <motion.div className='HomelyPage'
    initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}}
    >
      <Navbar />
      <ProjectTitle page="projectText__padded" role="Principal Designer & Junior Developer" title="Homely App" subtitle="UX Design & App Development" text="Homely is property management software app designed to be a social and conveinant way to handle all the needs of the tenant and leasing office relationship." />
      <img className="hero__image--full" src={PitchDeck1} />
      <img className="hero__image--full pitchDeck" src={PitchDeck2} />
      <img className="hero__image--70 homely__margins" src={Wires} />
      <h1 className='caption'>The ideation started with simple wireframes to outline some key features and give a subtle design direction. Once I was happy with the wireframes direction I made some quick mockups with colors and more defined shapes and design.</h1>
      <img className="hero__image--70" src={Styles} />
      <h1 className='caption'>After collaborinting with the Principle Developer and founder I refined the mockups and nailed down some sytle guides and made some higher fidelity mockups in Illustrator.</h1>
      <img className="hero__image--70" src={StyleGuide} />
      <img className="hero__image--70" src={StyleGuideDark} />
      <h1 className='caption'>Once I was happy with the design direction I started working in Adobe XD to build out the different stories and screens users will come across.</h1>
      <img className="homely__95" src={Mocks} />
      <img className="homely__95 homely__margins" src={Mocks2} />
      <img className="homely__95 homely__margins" src={Screens} />
    </motion.div>
  )
}

export default HomelyAppPage