import React from 'react'
import "./ProjectTitle.css"

const ProjectTitle = (props) => {
  return (
    <div className='titleCard'>
      <div className='titleCard__one'>
        <div className='projectTitle'>{props.title} <p className='subTitle'>{props.subtitle}</p></div>
        <div className='projectText'>{props.text}</div>
      </div>
      <div className='roleCard'>
        <div className='role'>{props.role}</div>
        <div className='role__text'>{props.roleText}</div>
      </div>
    </div>
  )
}

export default ProjectTitle