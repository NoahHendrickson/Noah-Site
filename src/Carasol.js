import React from 'react'
import { Carousel } from 'react-carousel-minimal'
import Dore from "./Assets/Logos/Doro-02.svg"

const Carasol = () => {

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  }

  const data = [
    {
      image: Dore,
    },
  ]

  return (
    <div className='Carousel'>
      <Carousel 
        data={data}
        time={2000}
        width="500px"
        slideImageFit="contain"
        style={{
          width: '1000px',
          padding: '0px',
          margin: '0px',
        }}
      />
    </div>
  )
}

export default Carasol