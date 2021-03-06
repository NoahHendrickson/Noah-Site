import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from '../App';
import Hyperglide from "../Assets/Logos/hyperglides-25.svg"
import TLH from "../Assets/Logos/TLH.svg"
import Beamen from "../Assets/Logos/BeamenLogo-21.svg"
import DORO from "../Assets/Logos/Doro-02.svg"
import BCLogo from "../Assets/Logos/BCLogo.svg"
import AbsurdUni from "../Assets/Logos/AbsurdUni.svg"
import DLT8 from '../Assets/Logos/DLT8-01.svg'
import DCL2 from "../Assets/Logos/dcl2-01.svg"
import Navbar from '../Navbar/Navbar'
import "./LogoPage.css"

const LogoDesign = () => {
  const [modal, setModal] = useState(false)
  const {theme} = useContext(ThemeContext)

  function openModal() {
    setModal(!modal)
  }
  return (
    <motion.div
      className={theme === 'light' ? 'LogoDesign' : 'LogoDesignDark'}
      initial={{y: '100vh'}}
      animate={{y: '0'}}
      exit={{y: '100vh', transition:{duration: .1}}}>
      <Navbar />
      <div className='logo__page'>
          <div className='tlh logoPatches'></div>
          <div className='bosciaRose logoPatches'></div>
          <div className='darkMatter logoPatches'></div>
          <div className='springside logoPatches'></div>
          <div className='dlt8 logoPatches'></div>
          <div className='doro logoPatches'></div>
          <div className='BC logoPatches'></div>
          <div className='dcl2 logoPatches'></div>
          <div className='beamen logoPatches'></div>
          <div className='absurdUni logoPatches'></div>
          <div className='cercek logoPatches'></div>
      </div>
    </motion.div>
  )
}

export default LogoDesign