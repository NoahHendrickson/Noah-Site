import React from 'react'
import { motion } from 'framer-motion'

const NoahPFP = (props) => {
  return (
    <div className='story'>
      <h1 className='story__title'>{props.Title}</h1>
        <p className='story__text'>
          {props.Text}
        </p>
    </div>
  )
}

export default NoahPFP