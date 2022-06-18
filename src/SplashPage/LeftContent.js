import React from 'react'
import ExpBox from './ExpBox';
import { ReactComponent as Headline } from '../Assets/Story/Headline-21.svg'


const LeftContent = () => {
  return (
    <div className='LeftContent'>
      <Headline className='Headline' />
      <ExpBox />
    </div>
  )
}

export default LeftContent