import React from "react";
// import { useParams } from "react-router-dom";
import '../../src/App.css'


export const Bio = () => {
//    const params = useParams()
	return (
        <div className="container">
		        <h1>CARLOS ORTIZ SANCHEZ</h1> 
                <h3>Description </h3>
                <hr/>
                <p className="bioclass">
                Ando a la busqueda de una empresa de desarrollo software original y diferente. Yo me considero también diferente. 
                Tengo una carrera contrastada en el sector del Procurement y Supply Chain, tambien en banca comercial pero 
                lo que me gusta realmente es sacar mi parte creativa como Software Developer y es por eso que actualmente me estoy 
                replanteando mis objetivos laborales hacia el mundo Tech en general y el Software en particular. 
                No soy un Jr propiamente dicho a pesar que busco llegar a un equipo en el que aprender, progresar y consolidarme, 
                tengo muchas ganas de avanzar y progresar y puedo aportar experiencia en muchos ámbitos, como dije al principio, no soy igual a los demás, soy diferente. 
                ¿Creéis qué podría encajar? Hablemos.
                </p> 
           
        </div>
	);
};
