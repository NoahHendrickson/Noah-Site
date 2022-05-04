import React from 'react'
import Noah from "./Assets/profilepic.jpeg"
import { motion } from 'framer-motion'

const NoahPFP = (props) => {
  return (
    <div className='story'>
      <h1 className='pfpTitle left'>My name is Noah</h1>
      <div className='pfp'></div>
      <div className='quickBio'>
        <p className='pfpText'>{props.bio}
        </p>
        <motion.button whileHover={{scale: 1.1}} className='fullStory__button'>How I got here ➡️ </motion.button>
      </div>
      
    </div>
  )
}

export default NoahPFP