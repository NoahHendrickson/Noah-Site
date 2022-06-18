import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import { ReactComponent as NoahLogo } from '../Assets/NoahBevel-20.svg'
import ButtonList from './ButtonList'
import FlowerLogo from '../CodeStuff/FlowerLogo'

const SideBar = ({toggleStory}) => {
  return (
    <div className='SideBar'>
      <ParallaxLayer className='SideBar' speed={2}>
        <FlowerLogo className="flower__container" />
        <NoahLogo className='NoahLogo'/>
        <ButtonList toggleStory={toggleStory} />
      </ParallaxLayer>
    </div>
  )
}

export default SideBar