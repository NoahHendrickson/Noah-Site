import React from 'react'

const ProjectTitle = (props) => {
  return (
    <div className='titleCard'>
      <div className='titleCard__one'>
        <div className='projectTitle'>{props.title} <p className='subTitle'>{props.subtitle}</p></div>
        <div className='projectText'>{props.text}</div>
      </div>
    </div>
  )
}

export default ProjectTitle