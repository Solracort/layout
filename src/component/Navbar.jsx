import React from "react";
import { Link } from "react-router-dom";
import Inicio from "../resources/pictures/home_icon.png"
import '../index.css'

export const Navbar = () => {
	
	return (
		<ul className="navegacion">
			<li key="0" className="nav-item">
				<img id="casita" src={Inicio} alt="Home"/><span id="inicio">Home</span>
				
			</li>
			<li key="1">ENGLISH</li>
			<li key="2" className="nav-boton">
				<Link className="nav-link" href="/" role="button">CV</Link>
			</li>
		</ul>
	);
};
