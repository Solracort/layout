import React from "react";
import '../../src/App.css'
import BIOPIC from '../resources/pictures/DSC07352.jpg'
import {Redes} from './Redes'

export const Mainpic = () => {
	
return(
	<div className="imagen">
    <img src={BIOPIC} className="App-logo" alt="logo" />
    <Redes />
  </div>
);	
}