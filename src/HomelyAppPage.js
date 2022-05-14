import React from 'react'
import { motion } from 'framer-motion'
import "./HomelyAppPage.css"
import Navbar from './Navbar'
import ProjectTitle from './ProjectTitle'
import Wires from "./Assets/HomelyApp/HomelyImages-07.svg"
import Styles from "./Assets/HomelyApp/HomelyImages-08.svg"
import StyleGuide from "./Assets/HomelyApp/HomelyImages-09.svg"
import StyleGuideDark from "./Assets/HomelyApp/HomelyImages-10.svg"
import Mocks2 from "./Assets/HomelyApp/homelyNew-01.svg"
import Mocks from "./Assets/HomelyApp/homelyNew-03.svg"
import Screens from "./Assets/HomelyApp/homelyNew-02.svg"

const HomelyAppPage = () => {
  return (
    <motion.div className='HomelyPage'
    initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}}
    >
      <Navbar page="homely" />
      <ProjectTitle role="Design Lead & Junior Developer" roleText="I am responsbile for all design aspects of this project. I am a self taught programmer and will also be undertaking some of the development process." title="Homely App" subtitle="UX Design" text="Homely is a property management app designed to be a conveinant and fresh way to handle all the needs of the tenant and leasing office relationship." />
      <h1 className='caption'>The ideation started with simple wireframes to outline some key features and give a subtle design direction. Once I was happy with the wireframes direction I made some quick mockups with colors and more defined shapes and design.</h1>
      <img className="hero__image--70" src={Wires} />
      <h1 className='caption'>After collaborinting with the Principle Developer and founder I refined the mockups and nailed down some sytle guides and made some higher fidelity mockups in Illustrator.</h1>
      <img className="hero__image--70" src={Styles} />
      <img className="hero__image--70" src={StyleGuide} />
      <h1 className='caption'>Dark Theme</h1>
      <img className="hero__image--70" src={StyleGuideDark} />
      <h1 className='caption'>Once I was happy with the design direction I started working in Adobe XD to build out the different stories and screens users will come across.</h1>
      <img className="hero__image--70" src={Mocks} />
      <img className="hero__image--70" src={Mocks2} />
      <h1 className='caption'>All the possible paths are being built out with Adobe XD</h1>
      <img className="hero__image--70" src={Screens} />
    </motion.div>
  )
}

export default HomelyAppPage