import React from "react";
import Inicio from "../resources/pictures/home_icon.png"
import '../index.css'

export const Navbar = () => {
	
	return (
		<ul className="navegacion">
			<li key="0" className="nav-item">
			<a className="nav-link" href="solracort.com" role="button">
				<img id="casita" src={Inicio} alt="Home"/><span id="inicio">Home</span>
			</a>
			</li>
			<li key="1">ENGLISH version</li>
			<li key="2" className="nav-boton">
				<a className="nav-link" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1nRdh5nP7EC53lw4EtUeMUitk_2PwEY11/view?usp=sharing" role="button" >CV</a>
			</li>
		</ul>
	);
};
