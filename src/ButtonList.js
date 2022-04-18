import React, { useState, useRef, useEffect } from 'react'
import SlideoutMenuDesign from './SlideoutMenuDesign'
import SlideoutMenuCode from './SlideoutMenuCode'

const ButtonList = ({ text }) => {
  return (
    <ul className='splash__page--buttons button_container'>
      <NavButton text="Design">
        <SlideoutMenuDesign />
      </NavButton>
      <NavButton text="Code">
        <SlideoutMenuCode />
      </NavButton>
      <NavButton text="Story" />
    </ul>
  );
};

export const NavButton = (props) => {
  const [open, setOpen] = useState(false);
  const button = useRef()

  useEffect(() => {
    if (open === true) {
      button.current.classList.add('button__bg')
    }
    if (open === false) {
      button.current.classList.remove('button__bg')
    }
  }, [open]);

  function toggle() {
    setOpen(!open)
  };

  return (
    <li  className='button__list'>
      <a ref={button} onClick={toggle} >
        {props.text}
      </a>
      {open && props.children}
    </li>
  );
};

export default ButtonList