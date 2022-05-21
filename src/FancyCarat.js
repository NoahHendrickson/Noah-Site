import React from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as DownCarat } from "./Assets/Story/fancyDownCarat.svg"

const FancyCarat = ({setWhich, selector}) => {
  return (
    <motion.div
      onMouseOver=
      {selector === "first" ? () => { setWhich('first child') } :
        selector === "second" ? () => { setWhich('second child') } :
        selector === "third" ? () => { setWhich('third child') } : 
        selector === "four" ? () => { setWhich('fourth child') } : 
        selector === "five" ? () => { setWhich('fifth child') } : "" }
      whileHover={{ scale: 1.2, rotate: -90 }}
>
    <DownCarat className='downCarat' />
  </motion.div>
  )
}

export default FancyCarat