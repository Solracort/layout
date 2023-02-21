import React from "react";
import '../../src/App.css'
import { Bio } from './Bio.jsx';
import { Mainpic } from './Mainpic.jsx'
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
