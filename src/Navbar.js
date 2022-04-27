import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList'
import Switch from './Switch';
import { ThemeContext } from './App'
import { ReactComponent as NoahLogo } from './Assets/NoahLogo-10.svg'
import { NavButton } from './ButtonList';
import SlideoutMenuCode from './SlideoutMenuCode';
import SlideoutMenuDesign from './SlideoutMenuDesign';



const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="Navbar">
      <div>
        something
      </div>
      <div>
        <button className="general__button">Contact</button>
      </div>
      <div>
        <NoahLogo className='NoahLogo'/>
      </div>
      <div className='navbar__buttons'>
        <NavButton text='Design'>
          <div className="dropdownMenuDesign">
            <li className='dropdownMenuDesign__item'>
              <Link className="path__button" to="/">UX</Link>
            </li>
            <li className='dropdownMenuDesign__item'>
              <Link className="path__button" to="/">Graphic</Link>
            </li>
            <li className='dropdownMenuDesign__item'>
              <Link className="path__button" to="/logo_design">Logo</Link>
            </li>
          </div>
        </NavButton>
        <NavButton text='Code'>
          <SlideoutMenuCode />
        </NavButton>
        <Link className="button" to='/'>
          Home
        </Link>
      </div>
      <div>
        <Switch />
      </div>
    </div>
  )
}

export default Navbar