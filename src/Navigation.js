import React from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from './FlowerLogo'
import Switch from './Switch';

import { ReactComponent as NoahLogo } from './Assets/NoahLogo-10.svg'
import './FlowerLogo.css'



const Navigation = ({theme}) => {
  return (
    <div className="Navigation">
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
    </div>
  )
}

export default Navigation