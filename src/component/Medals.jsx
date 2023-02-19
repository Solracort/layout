import '../../src/App.css'

import React from "react";

export const Medals = () => {
	const tech = ["HTML", "CSS", "BootStrap", "Git/Github","JavaScript", "React", "SQL", "Python", "Flask","C"]
	
return(
    
	<>
		<h2 className="text-center">Tecnologías</h2>
		
			<div className="skills">
				{tech.map((item,index)=>
                <ul><li key={index}>{item}</li></ul>    
                )} 				
			</div>
		
	</>
);	
}