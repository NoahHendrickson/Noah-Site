import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'


const GraphicPage = () => {
  return (
    <motion.div
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}} 
      className='GraphicPage'>
      <div className='Nav'>
        <Navbar />
      </div>
      <div className='graphics'>
        <div className='graphic'>
          
        </div>
      </div>
      <div className='graphics'>
        <div className='graphic'>

        </div>
      </div>
    </motion.div>
  )
}

export default GraphicPage