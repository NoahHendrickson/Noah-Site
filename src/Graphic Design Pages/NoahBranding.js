import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import "./NoahBranding.css"
import NoahBrandContent from './NoahBrandContent'

const NoahBranding = () => {
  return (
    <div className='NoahBrand'>
      <Navbar />
      <NoahBrandContent />
    </div>
  )
}

export default NoahBranding