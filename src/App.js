import './App.css';
import React from 'react'
import { useState, useContext } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './Navbar/Navbar';

export const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light')
  const [home, setHome] = useState(true)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === 'light' ? 'App' : 'AppDark'}>
        <Router>
          <AnimatedRoutes theme={theme} />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
