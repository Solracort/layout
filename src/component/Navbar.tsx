import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
import Inicio from '../resources/pictures/home_icon.png'
export const Navbar = () => {
	let lang = "ENG"
	return (
		<ul className="navegacion">
			<li key="0" className="nav-item">
			<a className="nav-link" href="/" role="button">
				<img id="casita" src={Inicio} alt="Home"/><span id="inicio">Home</span>
			</a>
			</li>
				<li key="1" className="nav-boton">
				<a className="nav-link" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1D1YWe3DlmrkvjU336Tz_HxoAsUek9FGZ/view?usp=share_link" role="button" >CV</a>
			</li>
			<li className="nav-boton" key="2">
				<div className="flags d-flex">
					<div className="flag1 m-1">
						<Link to={'./bio/'+lang}> 
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="50" height="50">
							<clipPath id="s">
								<path d="M0,0 v30 h60 v-30 z"/>
							</clipPath>
							<clipPath id="t">
								<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
							</clipPath>
							<g clip-path="url(#s)">
								<path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
								<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
								<path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
								<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
								<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
							</g>
							</svg>
						</Link>
					</div>
					<div className="flag2 m-1">
						<Link to={'./'}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="50" height="50">
							<clipPath id="s">
								<path d="M0,0 v30 h60 v-30 z"/>
							</clipPath>
							<clipPath id="t">
								<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
							</clipPath>
							<g clip-path="url(#s)">
								<path d="M0,0 v30 h60 v-30 z" fill="#C8102E"/>
								{/* <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" /> */}
								{/* <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/> */}
								<path d="M0,0 v0 M0,15 h60" stroke="#f1dc18" stroke-width="10"/>
								{/* <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/> */}
							</g>
							</svg>
						</Link>
					</div>
				</div>
			</li>

		</ul>
	);
};
