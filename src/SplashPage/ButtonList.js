import React, { useState, useRef, useEffect } from 'react'
import SlideoutMenuDesign from './SlideoutMenuDesign'
import SlideoutMenuCode from './SlideoutMenuCode'
import ContactDropdown from '../ContactDropdown/ContactDropdown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ButtonList = ({ text, toggleStory, scrollToBottom, toggleContact }) => {

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
      <li className='button__list'>
        <motion.div whileTap={{scale: .98}} whileHover={{scale: 1.1}} className='button__background customBttn'>
          <div className='button__front customBttn'>
            <a onClick={toggleStory} ref={NavButtonImitate} className='NavButton__imitation'>Me</a>
          </div>
        </motion.div>
      </li>
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
        className='button__background customBttn'>
          <div className='button__front customBttn'>
            <a className="button" onClick={toggle} ref={button}>
              {props.text}
            </a>
              {open && props.children}
          </div>
      </motion.div>
    </li>
  );
};

export default ButtonList