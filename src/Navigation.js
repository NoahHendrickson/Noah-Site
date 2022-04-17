import React from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from './FlowerLogo'
import Switch from './Switch';
import { motion } from 'framer-motion';

import { ReactComponent as NoahLogo } from './Assets/NoahLogo-10.svg'
import './FlowerLogo.css'



const Navigation = ({theme}) => {
  return (
    <motion.div className="Navigation"
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{width: 0, transition:{duration: .1}}} 
    >
      <div className='Switch__container'>
        <Switch />
      </div>
      <div className="splash__page">
        <h1>The theme is {theme}</h1>
        <h1>👋 🤬 😈</h1>
        <FlowerLogo />
        <NoahLogo className='NoahLogo'/>
        <ButtonList />
      </div>
    </motion.div>
  )
}

export default Navigation