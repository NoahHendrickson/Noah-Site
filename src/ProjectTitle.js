import React from 'react'
import "./ProjectTitle.css"

const ProjectTitle = (props) => {
  return (
    <div className='titleCard'>
      <div className='titleCard__one'>
        <div className='projectTitle'>{props.title}
          <p className='role' >{props.role}</p>
          <p className='subTitle'>{props.subtitle}</p>
        </div>
        <div className={props.page ? `projectText ${props.page}` : "projectText"} >{props.text}</div>
      </div>
    </div>
  )
}

export default ProjectTitle