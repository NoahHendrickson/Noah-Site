import React, {useEffect} from 'react'
import './NoahLogoAnimation.css'

const NoahLogoAnimated = () => {

  useEffect(() => {


    const rect = document.querySelectorAll('rect')
    rect.forEach(element => {
      const num = Math.floor(Math.random() * 99);
      const way = Math.floor(Math.random())
      const options = ["-", ""]

      element.style.transform = `translateX(${num}%)`

    });

    console.log(rect)
  }, [])
    
  return (
    <div className='NoahAnimation__container'>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	      viewBox="0 0 3000 650.1">
        <g>
          <rect className='letter h6' x="1139.6" y="508" width="118.5" height="118.5"/>
          <rect className='letter h5' x="1139.6" y="389.5" width="118.5" height="118.5"/>
          <rect className='letter h4' x="1139.6" y="271" width="118.5" height="118.5"/>
          <rect className='letter h3' x="1021.1" y="271" width="118.5" height="118.5"/>
          <rect className='letter h2' x="1021.1" y="152.5" width="118.5" height="118.5"/>
          <rect className='letter h1' x="1021.1" y="33.9" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letter' x="965.7" y="508" width="118.5" height="118.5"/>
          <rect className='letter' x="847.2" y="508" width="118.5" height="118.5"/>
          <rect className='letter' x="847.2" y="389.5" width="118.5" height="118.5"/>
          <rect className='letter' x="847.2" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="728.6" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="728.6" y="508" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letter' x="262.2" y="508" width="118.5" height="118.5"/>
          <rect className='letter' x="262.2" y="389.5" width="118.5" height="118.5"/>
          <rect className='letter' x="262.2" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="143.7" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="25.2" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="25.2" y="389.5" width="118.5" height="118.5"/>
          <rect className='letter' x="25.2" y="508" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letter' x="436.2" y="508" width="118.5" height="118.5"/>
          <rect className='letter' x="554.7" y="508" width="118.5" height="118.5"/>
          <rect className='letter' x="554.7" y="389.5" width="118.5" height="118.5"/>
          <rect className='letter' x="436.2" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="554.7" y="271" width="118.5" height="118.5"/>
        </g>
      </svg>
    </div>
  )
}

export default NoahLogoAnimated