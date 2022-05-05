import React, { useContext, useEffect } from 'react'
import { ReactComponent as Insta } from "./Assets/iconmonstr-instagram-11.svg"
import { ReactComponent as Github } from "./Assets/iconmonstr-github-1.svg"
import { ReactComponent as LinkedIn } from "./Assets/iconmonstr-linkedin-3.svg"
import { Link } from 'react-router-dom';
import { ThemeContext } from './App';


const Socials = () => {
  const { theme } = useContext(ThemeContext)
  
  useEffect(() => {
    
  })

  return (
    <div className='socials__container'>
          <Link to="/">
            <Insta className={theme === 'light' ? 'socials__icon' : 'socials__icon--dark' }/>
          </Link>
          <a href='https://github.com/NoahHendrickson' target="_blank">
            <Github className={theme === 'light' ? 'socials__icon' : 'socials__icon--dark' } />
          </a>
          <a href='https://www.linkedin.com/in/noah-hendrickson-808959192/' target="_blank">
            <LinkedIn className={theme === 'light' ? 'socials__icon' : 'socials__icon--dark' } />
          </a>
        </div>
  )
}

export default Socials