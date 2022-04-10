import React, { useContext, useState } from 'react'
import { ThemeContext } from './App'
import './Switch.css'

const Switch = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <label className='Switch'>
      <input onChange={handleToggle} type="checkbox" />
      <span className='Switch__slider'>
        <div className='theme__icon'>
          {/* {theme === 'light' ? 'light' : 'dark'} */}
        </div>
      </span>
    </label>
  )
}

export default Switch