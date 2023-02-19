import logo from '../pictures/DSC07352.jpg';
import '../../src/App.css'
import { Bio } from './Bio.jsx';
import { Medals } from './Medals.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es mi primera APP de react hecha por mi mismo desde cero.
        </p>
      </header>
      <div className="Aside">
        <Bio />
        <Medals />
      </div>
      
    </div>
  );
}

export default App;
