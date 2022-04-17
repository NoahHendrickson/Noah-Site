import React, {useContext} from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from './FlowerLogo'
import Switch from './Switch';
import { motion } from 'framer-motion';
import { ReactComponent as NoahLogo } from './Assets/NoahLogo-10.svg'
import './FlowerLogo.css'
import { ThemeContext } from './App';



const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <motion.div className="Navigation"
      initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}} 
      >
      <div className="splash__page">
        <h1>The theme is {theme}</h1>
        <div className='social__container'>
          <a className='insta__icon'></a>
          <a className='linkedin__icon'></a>
        </div>
        <NoahLogo className='NoahLogo'/>
        <ButtonList />
        <div className='Switch__container'>
          <Switch />
        </div>
      </div>
    </motion.div>
  )
}

export default Navigation