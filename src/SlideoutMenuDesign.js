import React, { useRef } from 'react'
import {Link} from "react-router-dom"

const SlideoutMenuDesign = ({ toggle, open, setOpen }) => {
  

  return (
    <div className='SlideOutMenu'>
      <ul>
        <li><Link  className="path__button" to="logo_design">Logo</Link></li>
        <li>Graphic</li>
        <li>UX</li>
      </ul>
    </div>
  )
}

export default SlideoutMenuDesign