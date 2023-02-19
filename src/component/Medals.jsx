import '../../src/App.css'

import React from "react";

export const Medals = () => {
	const tech = ["HTML", "CSS", "BootStrap", "Git/Github","JavaScript", "React", "SQL", "Python", "C"]
	
return(
    
	<>
		<h2 className="text-center">Tecnologías</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{tech.map((item,index)=>
                <ul><li key={index}>{item}</li></ul>    
                )} 				
			</div>
		</div>
	</>
);	
}