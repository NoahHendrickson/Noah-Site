import React, { useRef } from 'react'
import {Link} from "react-router-dom"

const SlideoutMenuDesign = ({ toggle, open, setOpen }) => {
  

  return (
    <div className='SlideOutMenu'>
      <ul>
        <li className="horizontal__menu"><Link className="horizontal__menu--button" to="logo_design">Logo</Link></li>
        <li className="horizontal__menu"><Link className="horizontal__menu--button" to="logo_design">Graphic</Link></li>
        <li className="horizontal__menu"><Link className="horizontal__menu--button" to="logo_design">UX</Link></li>
      </ul>
    </div>
  )
}

export default SlideoutMenuDesign