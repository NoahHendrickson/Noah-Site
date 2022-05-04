import React, { useState, useRef, useEffect } from 'react'
import SlideoutMenuDesign from './SlideoutMenuDesign'
import SlideoutMenuCode from './SlideoutMenuCode'
import ContactDropdown from './ContactDropdown';

const ButtonList = ({ text, toggleStory }) => {

  const [contactOpen, setContactOpen] = useState(false);
  const NavButtonImitate = useRef()

  function toggleBG() {
    NavButtonImitate.current.classList.toggle('button__bg')
  }

  function openContact() {
    setContactOpen(!contactOpen)
  };
  
  return (
    <ul className='splash__page--buttons button_container'>
      <NavButton text="Design">
        <SlideoutMenuDesign />
      </NavButton>
      <NavButton text="Code">
        <SlideoutMenuCode />
      </NavButton>
      <li className='button__list'>
        <a onClick={() => {toggleBG(); toggleStory();}} ref={NavButtonImitate} className='NavButton__imitation'>About Me</a>
      </li>
      <NavButton text="Contact">
        <ContactDropdown />
      </NavButton>
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
      <a className="button" ref={button} onClick={toggle}>
        {props.text}
      </a>
      {open && props.children}
    </li>
  );
};

export default ButtonList