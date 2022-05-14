import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ButtonList from './ButtonList'
import Switch from './Switch';
import { ThemeContext } from './App'
import { ReactComponent as NoahLogo } from './Assets/NoahHyperLeaf-05.svg'
import { NavButton } from './ButtonList';
import SlideoutMenuCode from './SlideoutMenuCode';
import SlideoutMenuDesign from './SlideoutMenuDesign';
import Socials from './Socials';
import ContactDropdown from './ContactDropdown';

const Navbar = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [contactMenu, setContactMenu] = useState(false);

  function toggleContact() {
    setContactMenu(!contactMenu)
  };

  return (
    <div className='Nav'>
    <div className={props.page ? `Navbar ${props.page}` : "Navbar"}>
      <div>
        <Socials />
      </div>
        <div>
         
      </div>
      <div>
        <NoahLogo className='NoahLogo__smaller'/>
      </div>
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
              <Link className="path__button" to="/logo_design">SVG Animations</Link>
            </li>
          </div>
        </NavButton>
          <li className='button__list'>
          <motion.div whileHover={{scale: 1.1}} className='behind customBttn'>
            <div className='front customBttn'>
              <a onClick={toggleContact} className="button contactButton">Contact
              </a>
              {contactMenu && <ContactDropdown nav="nav" />}
            </div>
          </motion.div>
          </li>
        <li className='button__list'>
          <motion.div whileTap={{scale: .98}} whileHover={{scale: 1.1}} className='behind customBttn homeBttn'>
            <div className='front customBttn'>    
              <Link className="button" to='/'>
              Home
              </Link>
            </div>
          </motion.div>
          </li>
      </div>
      <div className='horizontal__switch'>
        <Switch />
      </div>
      </div>
    </div>
  )
}

export default Navbar