import React from "react";
import '../../src/App.css'
import {Carrusel} from './Logo.jsx'
export const Medals = () => {
	const tech = ["HTML5", "CSS3", "BootStrap", "Git","Github","JavaScript", "React", "SQL", "Python", "Flask","C"]
	
return(
	<div className="Medals">
		<div>
			<h2>Tecnologías</h2>
		</div>
		<ul className="tecno">
		{tech.map((item, index)=>
			<li key={item}>  <Carrusel  id={index} name={item}  /> </li>
        )}
		</ul>  				

	</div>	
	);	
}