import React from 'react'
import { motion } from 'framer-motion'

const NoahPFP = (props) => {
  return (
    <div className='story'>
      <h1 className='story__title'>{props.Title}</h1>
      <div className='skills__container'>
        <img className="skills" src={props.html} />
        <img className="skills" src={props.css} />
        <img className="skills" src={props.java} />
        <img className="skills" src={props.react} />
      </div>
        <p className='story__text'>
          {props.Text}
        </p>
    </div>
  )
}

export default NoahPFP