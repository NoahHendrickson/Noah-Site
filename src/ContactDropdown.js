import React from 'react'
import "./ContactDropdown.css"


const ContactDropdown = ({nav}) => {
  return (
    <div className={nav === "nav" ? 'ContactDropdown__nav' : 'ContactDropdown'}>
      <h1 className='contactTitle'>Reach Out 😄</h1>
      <label className='contact__label'>Subject</label>
      <input className='contact__inputField' placeholder='Whats this inquiry bout' />
      <label className='contact__label'>Message</label>
      <textarea className='contact__inputField longField' placeholder='Go into detail'/>
    </div>
  )
}

export default ContactDropdown