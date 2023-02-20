import React from "react";
import '../../src/App.css'
import {Logo} from './Logo.jsx'
export const Medals = () => {
	const tech = ["HTML5", "CSS3", "BootStrap", "Git","Github","JavaScript", "React", "SQL", "Python", "Flask","C"]
	
return(
	
	<>
		<h2 className="text-center">Tecnologías</h2>
			<div className="skills">
				{tech.map((item,index)=>
                <ul><li key={index}><Logo name={item} />{item}</li></ul>    
                )} 				
			</div>
		
	</>
);	
}