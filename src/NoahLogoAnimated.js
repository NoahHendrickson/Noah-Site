import React, {useEffect} from 'react'
import './NoahLogoAnimation.css'

const NoahLogoAnimated = () => {

  useEffect(() => {
    const rect = document.querySelectorAll('rect')
    rect.forEach(element => {
      const num = Math.floor(Math.random() * 99);
      const number = Math.floor(Math.random() * 99);
      const rotate = Math.floor(Math.random() * 360);
      const scale = Math.random() * 5;
      const scaleY = Math.random() * 2;
      const delay = Math.floor(Math.random() * 900)

      const options = ["-", ""];
      const selection = Math.floor(Math.random() * 2)
      const direction = options[selection]
      console.log(direction)

      element.style.transform = `translateX(${direction}${number}%)`
      // element.style.animationDelay = `${delay}ms`
    });

    console.log(rect)
  }, [])
    
  return (
    <div className='NoahAnimation__container'>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	      viewBox="0 0 3000 1200">
        <g>
          <rect className='letterBG' x="1139.6" y="508" width="118.5" height="118.5"/>
          <rect className='letterBG' x="1139.6" y="389.5" width="118.5" height="118.5"/>
          <rect className='letterBG' x="1139.6" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="1021.1" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="1021.1" y="152.5" width="118.5" height="118.5"/>
          <rect className='letterBG' x="1021.1" y="33.9" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letterBG' x="965.7" y="508" width="118.5" height="118.5"/>
          <rect className='letterBG' x="847.2" y="508" width="118.5" height="118.5"/>
          <rect className='letterBG' x="847.2" y="389.5" width="118.5" height="118.5"/>
          <rect className='letterBG' x="847.2" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="728.6" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="728.6" y="508" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letterBG' x="262.2" y="508" width="118.5" height="118.5"/>
          <rect className='letterBG' x="262.2" y="389.5" width="118.5" height="118.5"/>
          <rect className='letterBG' x="262.2" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="143.7" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="25.2" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="25.2" y="389.5" width="118.5" height="118.5"/>
          <rect className='letterBG' x="25.2" y="508" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letterBG' x="436.2" y="508" width="118.5" height="118.5"/>
          <rect className='letterBG' x="554.7" y="508" width="118.5" height="118.5"/>
          <rect className='letterBG' x="554.7" y="389.5" width="118.5" height="118.5"/>
          <rect className='letterBG' x="436.2" y="271" width="118.5" height="118.5"/>
          <rect className='letterBG' x="554.7" y="271" width="118.5" height="118.5"/>
        </g>
        <g>
          <rect className='letter' x="1139.6" y="508" width="118.5" height="118.5"/>
          <rect className='letter' x="1139.6" y="389.5" width="118.5" height="118.5"/>
          <rect className='letter' x="1139.6" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="1021.1" y="271" width="118.5" height="118.5"/>
          <rect className='letter' x="1021.1" y="152.5" width="118.5" height="118.5"/>
          <rect className='letter' x="1021.1" y="33.9" width="118.5" height="118.5"/>
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