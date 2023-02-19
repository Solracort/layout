import logo from '../pictures/DSC07352.jpg';
import '../../src/App.css'
import { Bio } from './Bio.jsx';
import { Medals } from './Medals.jsx';

function App() {
  return (
    <div className="App">
      <div className="imagen">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="Aside">
        <Bio />
        <Medals />
      </div>
    </div>
  );
}

export default App;
