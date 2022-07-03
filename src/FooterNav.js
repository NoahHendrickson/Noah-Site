import React from 'react'
import { Link } from 'react-router-dom'

const FooterNav = () => {
  return (
  <div className='FooterNav'>
    <div className='FooterNavSection'>
        <h1 className='FooterTitle'>Jump to another project</h1>
    </div>
    <div className='FooterNavSection'>
      <h1 className='FooterTitle'>UX</h1>
    <Link className='FooterLink' to="/HomelyPage">Homely App</Link>
    <Link className='FooterLink' to="/DarkMatter">Dark Matter Network</Link>
    </div>
    <div className='FooterNavSection'>
      <h1 className='FooterTitle'>Graphic</h1>
    <Link className='FooterLink' to="/HowToPC">How To Build a PC</Link>
    <Link className='FooterLink' to="/NachoBox">Nacho Box</Link>
    <Link className='FooterLink' to="/FitPage">Fit</Link>
    </div>
  </div>
  )
}

export default FooterNav