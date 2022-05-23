import React from 'react'
import { filterProps, motion } from 'framer-motion'

const TimelineButton = (props) => {
  return (
  <motion.div className='timeline__button'>
    <div className='timeline__button--front'>
      <h1 className='caption__timeline'>{props.text}</h1>
    </div>
  </motion.div>
  )
}

export default TimelineButton