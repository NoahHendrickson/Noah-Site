import './App.css';
import './FlowerLogo.css'
import FlowerLogo from './FlowerLogo';
import {ReactComponent as NoahLogo} from './Assets/NoahLogo-10.svg'

function App() {
  return (
    <div className="App">
      <div className="splash__page">
        <FlowerLogo />
        <NoahLogo className='NoahLogo'/>
        <div className='splash__page--buttons button_container'>
          <button>
            <p>Design</p>
            <div className='SlideOutMenu'>
              <ul>
                <li>UX</li>
                <li>Graphic</li>
                <li>Logo</li>
              </ul>
            </div>
          </button>
          <button>Code</button>
          <button>Story</button>
        </div>
     </div>
    </div>
  );
}

export default App;
