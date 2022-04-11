import './App.css';
import './FlowerLogo.css'
import FlowerLogo from './FlowerLogo';
import {ReactComponent as NoahLogo} from './Assets/NoahLogo-10.svg'
import ButtonList from './ButtonList';
import Switch from './Switch';
import { useState, useContext } from 'react'
import React from 'react'

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <div className='Switch__container'>
          <Switch />
        </div>
        <div className="splash__page">
          <h1>The theme is {theme}</h1>
          <h1>👋 I'm Noah and I am a designer and aspiring developer</h1>
          <FlowerLogo />
          <NoahLogo className='NoahLogo'/>
          <ButtonList />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
