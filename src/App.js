import './App.css';
import React from 'react'
import { useState, useContext } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
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
