import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
import Inicio from '../resources/pictures/home_icon.png'
export const Navbar = () => {
	let lang = "ENG"
	return (
		<ul className="navegacion">
			<li key="0" className="nav-item">
			<a className="nav-link" href="../layout.tsx" role="button">
				<img id="casita" src={Inicio} alt="Home"/><span id="inicio">Home</span>
			</a>
			</li>
			<li key="1"><Link to={"/bmañana io/"+{lang}}>ENGLISH version</Link></li>
			<li key="2" className="nav-boton">
				<a className="nav-link" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1nRdh5nP7EC53lw4EtUeMUitk_2PwEY11/view?usp=sharing" role="button" >CV</a>
			</li>
		</ul>
	);
};
