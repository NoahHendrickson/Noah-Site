import React, { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Switch from './Switch';
import { ThemeContext } from '../App'
import { ReactComponent as NoahLogo } from '../Assets/NoahHyperLeaf-05.svg'
import { NavButton } from '../SplashPage/ButtonList';
import SlideoutMenuCode from '../SplashPage/SlideoutMenuCode';
import SlideoutMenuDesign from '../SplashPage/SlideoutMenuDesign';
import Socials from './Socials';
import ContactDropdown from '../ContactDropdown/ContactDropdown';

const Navbar = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [contactMenu, setContactMenu] = useState(false);
  const screenSize = window.screen.width
  const contactRef = useRef();
  const menuRef = useRef();

  function toggleContact() {
    setContactMenu(!contactMenu)
  };
  
  document.addEventListener('click', e => {
    if (e.target === contactRef.current) {
      console.log('something')
    } else if (e.target === menuRef.current) {
      console.log('something')
    } else {
      setContactMenu(false)
      console.log('something else')
    }
  })

  return (
    <div className='Nav'>
      <div className={props.page ? `Navbar ${props.page}` : "Navbar"}>
      <div className='navbar__buttons'>
         <NavButton text='Design'>
            <div className="dropdownMenuDesign">
              <li className='dropdownMenuDesign__item'>
                <Link className="path__button" to="/UXPage">UX</Link>
              </li>
              <li className='dropdownMenuDesign__item'>
                <Link className="path__button" to="/GraphicPage">Graphic</Link>
              </li>
              <li className='dropdownMenuDesign__item'>
                <Link className="path__button" to="/logo_design">Logo</Link>
              </li>
            </div>
          </NavButton>
          <NavButton text='Code'>
            <div className="dropdownMenuDesign">
              <li className='dropdownMenuDesign__item'>
                <Link className="path__button" to="/CrpoPage">The CRPO</Link>
              </li>
              <li className='dropdownMenuDesign__item'>
                <a className="path__button" target="_blank" href='https://noahhendrickson.github.io/calculator/'>JS Calc</a>
              </li>
              <li className='dropdownMenuDesign__item'>
                <Link className="path__button" to="/SVGAnimations">SVG Animations</Link>
              </li>
              <li className='dropdownMenuDesign__item'>
                <a className="path__button" target="_blank" href='https://github.com/NoahHendrickson/Noah-Site'>This Site</a>
              </li>
            </div>
          </NavButton>
            <li className='button__list'>
              <motion.div whileHover={{scale: 1.1}} className='button__background customBttn'>
                <div className='button__front customBttn'>
                  <a ref={contactRef} onClick={toggleContact} className="button contactButton">Contact
                  </a>
                {contactMenu && <ContactDropdown nav="nav" />}
                </div>
              </motion.div>
            </li>
            <li className='button__list'>
              <motion.div whileTap={{scale: .98}} whileHover={{scale: 1.1}} className='button__background customBttn homeBttn'>
                <div className='button__front customBttn'>    
                  <Link className="button" to='/'>
                    Home
                  </Link>
                </div>
              </motion.div>
            </li>
          </div>
        
          

        <div className='nav__logo--holder'>
          <NoahLogo className='NoahLogo__smaller'/>
        </div>
        {screenSize > 500 ?
          <div className='nav__social'>
            <Socials class={"nav"} />
          </div> : null}
        
          <div className='horizontal__switch'>
            <Switch />
          </div>
      </div>
    </div>
  )
}

export default Navbar