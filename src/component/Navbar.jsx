import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

export const Navbar = () => {
	//const {store,actions}= useContext(Context)
	return (
		<ul className="navegacion">
			<li key="0" className="nav-item">
				NavBar
			</li>
			<li key="1" className="nav-boton">
				<Link className="nav-link" href="*" role="button">Favorites</Link>
			</li>
		</ul>
	);
};
