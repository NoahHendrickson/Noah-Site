import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import PicOne from "../Assets/NachoBoxPics/IMG_0095.jpg"
import PicTwo from "../Assets/NachoBoxPics/Letters.jpg"
import PicThree from "../Assets/NachoBoxPics/fontImage-05-05.svg"
import icons from "../Assets/NachoBoxPics/icons-04.svg"
import iconsBanner from "../Assets/NachoBoxPics/iconsBanner-10.svg"
import nachoCovers from "../Assets/NachoBoxPics/nachoboxcovers-02.svg"
import ProjectTitle from '../ProjectTitle'

const NachoBox = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <motion.div className={theme === 'light' ? 'NachoBox__page' : 'NachoBox__page--dark'}
      initial={{y: '-100vh'}}
      animate={{y: '0'}}
      exit={{y: '-100vh', transition:{duration: .2}}} 
    >
      <Navbar />
      <div className='content'>
        <ProjectTitle title='Nacho Box' subtitle='Package & Pattern Design' text="This is a packaging project I created in College. My goal was to concept out a conveinant chips and salsa container for parties or get togethers." />
        <div className='images'>
          <div className='title__image'></div>
          <h1 className='caption'>To achieve an organic vibe I hand drew all the lettering and icons with pen and paper and then scanned them into Illustrator and cleaned them up.</h1>
          <div className='process__images'>
            <div className='process__image process__image--left'></div>
            <div className='process__image process__image--right'></div>
          </div>
          <h1 className='caption'>This is the final font and some words that are associated with the concept of this project.</h1>
          <img className='hero__image--70 hero__image--fonts' src={PicThree} />
          <h1 className='caption'>I took the same style and approach to create the icons for the patterns in this project.</h1>
          <div className='process__images'>
            <div className='sketch sketch--one'></div>
            <div className='sketch sketch--two'></div>
            <div className='sketch sketch--three'></div>
            <div className='sketch sketch--four'></div>
          </div>
          <img className='hero__image--70' src={iconsBanner} />
          <img className='hero__image' src={icons} />
          <img className='hero__image' src={nachoCovers} />
          <div className='process__images process__images--package'>
            <div className='process__image--package package__left'></div>
            <div className='process__image--package package__right'></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NachoBox