//import logo from '../../public/pictures/DSC07352.jpg';
import '../../src/App.css'
import { Bio } from './Bio.jsx';
import BIOPIC from '../resources/DSC07352.jpg'
import { Medals } from './Medals.jsx';

function App() {
  return (
    <div className="App">
      <div className="imagen">
        <img src={BIOPIC} className="App-logo" alt="logo" />
      </div>
      <div className="Aside">
        <Bio />
        <Medals />
      </div>
    </div>
  );
}

export default App;
