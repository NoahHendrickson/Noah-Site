import React from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as DownCarat } from "./Assets/Story/fancyDownCarat.svg"

const FancyCarat = () => {
  return (
    <motion.div whileHover={{scale: 1.2, rotate: -90}}>
    <DownCarat className='downCarat' />
  </motion.div>
  )
}

export default FancyCarat