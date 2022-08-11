// Importar recursos nescessários para criar componente classe !
import React, {Component} from "react";
// import do css
import './Demo.css';


// Definir o componente de classe
class Child extends Component{
    // método render()
    render(){
        return(
            // construir um view
            <div>
                <h2 className="titulo4">Olá ! Sou o componente-filho</h2>
                {/* props e o elemento que esta recebendo Presente dentro do Parent de 
                um para o outro transporte sem alteraçoes não sofrem alteração nesse
                transporte, nao tendo como alterar de forma dinamica  em tempo de execução */}
                <h3 className="titulo6">{this.props.Presente}</h3>
            </div>
        )
    }        
}
export default Child;