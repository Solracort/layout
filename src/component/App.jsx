//import logo from '../../public/pictures/DSC07352.jpg';
import '../../src/App.css'
import { Bio } from './Bio.jsx';
import {Mainpic} from './mainpic.jsx'
import { Medals } from './Medals.jsx';

function App() {
  return (
    <div className="App">
      <Mainpic />
      <div className="Aside">
        <Bio />
        <Medals />
      </div>
    </div>
  );
}
export default App;
