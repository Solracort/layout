import '../../src/App.css';
import Bootstrap from '../resources/pictures/Bootstrap.png'
import C from '../resources/pictures/C.png'
import CSS3 from '../resources/pictures/CSS3.png'
import Flask from '../resources/pictures/Flask.png'
import Git from '../resources/pictures/Git.png'
import Github from '../resources/pictures/Github.png'
import HTML5 from '../resources/pictures/HTML5.png'
import JavaScript from '../resources/pictures/JavaScript.png'
import Python from '../resources/pictures/Python.png'
import ReactLogo from '../resources/pictures/React.png'
import SQL from '../resources/pictures/SQL.png'

export const Carrusel = (props) => {
    function EscogeImagen(num){
        
        if (num===0)    {return HTML5}
        else if(num===1){return CSS3}
        else if(num===2){return  Bootstrap}
        else if(num===3){return  Git}
        else if(num===4){return  Github}
        else if(num===5){return  JavaScript}
        else if(num===6){return  ReactLogo}
        else if(num===7){return  SQL}
        else if(num===8){return  Python}
        else if(num===9){return  Flask}
        else if (num===10){return C}
        else {console.log("Hay algun error en el numero de props")}
        return 
    }
return(
	<div className="container text-center">
		 <img className="logoStyle" src={EscogeImagen(props.id)} alt="NO LOGO"/>
    </div>
	);	
}