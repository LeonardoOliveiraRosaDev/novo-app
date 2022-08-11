// importar os recursos nescessários
import React, {Component} from "react";

// importar o componente Child
import Child from './Child';
import FuncSeta from './FuncSeta';
// import do css
import './Demo.css';

// definir o componente classe
class Parent extends Component{
    // chamar o método render()
    render(){
        return(
            // construir o view
            <div>
                <h2  className="titulo5">Olá ! Sou o componente-pai</h2>
                <Child Presente = "Texto descrito no comp-pai. Será enviado para comp-filho"/>
                <FuncSeta Presente2 = "Um outro Dado do Elemento pai !"/>
            </div>
        )
    }
}

// exportar o componente
export default Parent;