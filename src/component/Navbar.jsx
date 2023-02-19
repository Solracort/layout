import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

export const Navbar = () => {
	//const {store,actions}= useContext(Context)
	return (
		<ul className="navegacion">
			<li className="nav-item">
				NavBar
			</li>
			<li className="nav-boton dropdown ms-3">
				<Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="true">Favorites</Link>
				<ul className="dropdown-menu">
					<li >
						<button onClick="#">x</button>
					</li>
					
				</ul>
			</li>
		</ul>
	);
};
