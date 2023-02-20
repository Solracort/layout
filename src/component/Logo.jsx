import React from "react";
import '../../src/App.css';
// import { Bio } from './Bio.jsx';
// import { Medals } from './Medals.jsx';

export const Logo = (props) => {
let ruta = "../../pictures/"+props.name+".png";    
//console.log(ruta);
return(
	<>
		<div className="container text-center">
		    <img className="logoStyle" src={ruta} alt="NO LOGO"/>
        </div>
	</>
);	
}