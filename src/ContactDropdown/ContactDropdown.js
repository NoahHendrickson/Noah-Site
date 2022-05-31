import React, {forwardRef} from 'react'
import "./ContactDropdown.css"


const ContactDropdown = (props) => {
  
  return (
    <div className={props.nav === "nav" ? 'ContactDropdown__nav' : 'ContactDropdown'}>
      <h1 className='contactTitle'>Reach Out 😄</h1>
      <form action="https://formsubmit.co/noahjames017@gmail.com" method="POST">
      <input name="email" className='contact__inputField' placeholder='Your email' />
      <label className='contact__label'>Subject</label>
      <input name="Subject" className='contact__inputField' placeholder='Whats this inquiry bout' />
      <label className='contact__label'>Message</label>
        <textarea name="message" className='contact__inputField longField' placeholder='Go into detail' />
        <div className='button__background greenDark customBttn inputBttn'>
          <div className='button__front green customBttn'>
            <input className="button" type="Submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactDropdown