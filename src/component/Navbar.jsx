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
			<li key="1">ENGLISH</li>
			<li key="2" className="nav-boton">
				<a className="nav-link" href="../resources/ENGLISH RESUME.pdf" role="button" download="ENGLISH RESUME.pdf">CV</a>
			</li>
		</ul>
	);
};
