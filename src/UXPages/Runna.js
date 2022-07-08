import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProjectTitle from '../ProjectTitle'
import "./Runna.css"
import SplineThing from './SplineThing'

const Runna = () => {
  return (
    <div className='Runna'>
      <Navbar />
      <ProjectTitle role="" title="Runna" subtitle="UX Design & App Conecpt" text="This is a concept" />
      <div className='Spline'>
      <SplineThing />

      </div>
    </div>
  )
}

export default Runna