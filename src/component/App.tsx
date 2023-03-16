import React from "react";
import '../../src/App.css'
import { Bio } from './Bio';
import { Mainpic } from './Mainpic2'
import { Medals } from './Medals';
import 'bootstrap/dist/css/bootstrap.min.css';
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
