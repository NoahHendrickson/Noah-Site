import React, { useState, useRef, useEffect } from 'react'
import SlideoutMenuDesign from './SlideoutMenuDesign'
import SlideoutMenuCode from './SlideoutMenuCode'
import ContactDropdown from './ContactDropdown';
import { motion } from 'framer-motion';

const ButtonList = ({ text, toggleStory }) => {

  const [contactOpen, setContactOpen] = useState(false);
  const NavButtonImitate = useRef()

  // function toggleBG() {
  //   NavButtonImitate.current.classList.toggle('button__bg')
  // }

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
        <motion.div whileTap={{scale: .98}} whileHover={{scale: 1.1}} className='behind customBttn'>
          <div className='front customBttn'>
            <a onClick={toggleStory} ref={NavButtonImitate} className='NavButton__imitation'>Me</a>
          </div>
        </motion.div>
      </li>
      <NavButton text="Contact">
        <ContactDropdown />
      </NavButton>
    </ul>
  );
};

export const NavButton = (props) => {
  const [open, setOpen] = useState(false);
  const button = useRef();


  function toggle() {
    setOpen(!open)
  };

  return (
    <li className='button__list'>
      <motion.div
        whileTap={{scale: 1.05}}
        whileHover={{ scale: 1.1 }}
        className='behind customBttn'>
          <div className='front customBttn'>
            <a className="button" ref={button} onClick={toggle}>
              {props.text}
            </a>
              {open && props.children}
          </div>
      </motion.div>
    </li>
  );
};

export default ButtonList