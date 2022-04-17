import './App.css';
import './FlowerLogo.css'
import FlowerLogo from './FlowerLogo';
import {ReactComponent as NoahLogo} from './Assets/NoahLogo-10.svg'
import ButtonList from './ButtonList';
import Switch from './Switch';
import { useState, useContext } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoDesign from './LogoDesign';
import Navigation from './Navigation';
import AnimatedRoutes from './AnimatedRoutes';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App'>
        <Router>
          <AnimatedRoutes theme={theme} />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
