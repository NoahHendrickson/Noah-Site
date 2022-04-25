import React from 'react'
import { ReactComponent as Insta } from "./Assets/iconmonstr-instagram-11.svg"
import { ReactComponent as Github } from "./Assets/iconmonstr-github-1.svg"
import { ReactComponent as LinkedIn } from "./Assets/iconmonstr-linkedin-3.svg"
import { Link } from 'react-router-dom';


const Socials = () => {
  return (
    <div className='socials__container'>
          <Link to="/">
            <Insta className='socials__icon'/>
          </Link>
          <a href='https://github.com/NoahHendrickson' target="_blank">
            <Github className='socials__icon' />
          </a>
          <a href='https://www.linkedin.com/in/noah-hendrickson-808959192/' target="_blank">
            <LinkedIn className='socials__icon' />
          </a>
        </div>
  )
}

export default Socials