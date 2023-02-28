import React, {useState} from "react";
import '../../src/App.css';
import { useParams } from "react-router-dom";

export const Bio = () => {
        const params = useParams()
        console.log(params.lang)
        const [lang, setLang] = useState(params.lang)
	
        if (lang ==="ENG"){
                return(
                <div className="container">
                        <h1>CARLOS ORTIZ SANCHEZ</h1> 
                        <h3>Description </h3>
                        <hr/>
                        <p className="bioclass">
                                I am looking for an original and different software development company. I also consider myself different.
                                I am a web developer with passion for turning coffe into code and solving problems with a keyboard and Google.
                                I have always been interested in web development and I have been continuosly learning and improving my skills in the past years. 
                                I am a family man with the best wife and two wonderful children.
                                I have a proven career in the Procurement and Supply Chain sector, also in commercial banking in my earlies carreer but
                                What I really like is to get my creative side out as a Software Developer and that is why I am currently
                                rethinking my work objectives towards the Tech world in general and Software in particular.
                                The past year, I decided to return to web development and focus on learning all the new technologies. 
                                I am not a Jr properly speaking, although I am looking to reach a team in which to learn, progress and consolidate as an important,
                                I really want to advance and progress and I can bring experience in many areas, as I said at the beginning, 
                                I am not the same as the others, I am different. Do you think It could fit with you? Let's talk.
                        </p> 
                </div>)
        }
        else{
                return (
                <div className="container">
                        <h1>CARLOS ORTIZ SANCHEZ</h1> 
                        <h3>Description </h3>
                        <hr/>
                        <p className="bioclass">
                                Busco una empresa de desarrollo de software original y diferente. Yo también me considero diferente.
                                Soy un desarrollador web apasionado por convertir café en código y resolver problemas con un teclado y Google.
                                Siempre me ha interesado el desarrollo web y he estado aprendiendo y mejorando continuamente mis habilidades a través de los años.
                                Soy un hombre de familia con la mejor esposa y dos hijos maravillosos.
                                Tengo una carrera comprobada en el sector de Compras y Cadena de Suministro, también en banca comercial en mis inicios de carrera pero
                                Lo que realmente me gusta es sacar mi lado creativo como Desarrollador de Software y por eso actualmente estoy
                                replanteando mis objetivos laborales hacia el mundo Tech en general y el Software en particular.
                                El año pasado, decidí volver al desarrollo web y concentrarme en aprender todas las nuevas tecnologías.
                                No soy un Jr propiamente dicho, aunque busco llegar a un equipo en el que aprender, progresar y consolidarme como parte importante,
                                Tengo muchas ganas de avanzar y progresar y puedo aportar experiencia en muchas áreas, como dije al principio,
                                No soy igual a los demás, soy diferente. ¿Crees que yo podría encajar con vosotros? Hablemos.
                        </p> 
                </div>)
        }
	
};
