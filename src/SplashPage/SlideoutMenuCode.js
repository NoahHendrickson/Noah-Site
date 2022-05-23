import React from 'react'
import { Link } from 'react-router-dom'

const SlideoutMenuCode = () => {

  return (
    <div className='SlideOutMenu--code'>
      <ul>
        <Link to="/CrpoPage" ><li className='code__list'>CRPO</li></Link>
        <Link to="SVGAnimations"><li className='code__list'>SVG Animation</li></Link>
        <a target="_blank" href='https://noahhendrickson.github.io/calculator/'><li className='code__list'>JS Calc</li></a>
        <a target="_blank" href='https://github.com/NoahHendrickson/Noah-Site'><li className='code__list'>This Site</li></a>
      </ul>
    </div>
  )
}

export default SlideoutMenuCode