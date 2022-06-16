import React from 'react'
import LogoDesign from './LogoPage'
import Hyperglide from "../Assets/Logos/hyperglides-25.svg"
import TLH from "../Assets/Logos/TLH.svg"
import Beamen from "../Assets/Logos/BeamenLogo-21.svg"
import DORO from "../Assets/Logos/Doro-02.svg"
import BCLogo from "../Assets/Logos/BCLogo.svg"
import AbsurdUni from "../Assets/Logos/AbsurdUni.svg"
import DLT8 from '../Assets/Logos/DLT8-01.svg'
import DCL2 from "../Assets/Logos/dcl2-01.svg"
import Navbar from '../Navbar/Navbar'

const NewLogoArea = () => {

  const logos = [
    {
      id: 1,
      img: Hyperglide,
      color: "pink",
    },
    {
      id: 2,
      img: DORO,
      color: "lightblue",
    },
    {
      id: 3,
      img: Beamen,
      color: "brown",
    },
    {
      id: 4,
      img: BCLogo,
      color: "brown",
    },
    {
      id: 5,
      img: AbsurdUni,
      color: "brown",
    },
  ]

  return (
    logos.map((logo, i) => (
      <div  style={{backgroudColor: "#FFFFFF"}} className='LogoHolder'>
        <img src={logo.img} />
      </div>
    ))
  )
}

export default NewLogoArea