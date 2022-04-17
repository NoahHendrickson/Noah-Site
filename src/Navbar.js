import React, {useContext} from 'react'
import ButtonList from './ButtonList'
import FlowerLogo from './FlowerLogo'
import Switch from './Switch';
import { ThemeContext } from './App'
import { ReactComponent as NoahLogo } from './Assets/NoahLogo-10.svg'


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="Navbar">
      <div className='Switch__container'>
      <Switch />
      </div>
        <FlowerLogo />
        <NoahLogo className='NoahLogo'/>
        <ButtonList />
      </div>
  )
}

export default Navbar