import React from "react";

export const Home = () => {
	
	
return(
	<>
		<h2 className="text-center">Personajes</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{/* {personaje.map((item)=><Cards key={item.uid} id={item.uid} nombre={item.name} />)} */}
				
			</div>
		</div>
	</>
);	
}