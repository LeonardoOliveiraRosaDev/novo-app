// Importar os recursos nescessários
import React, {Component} from "react";
import './Demo.css';

// Definir o componente de classe

class State extends Component{
     //Definir o state da aplicaçao
     state = {
        texto: 'Este é o conteúdo representando o estado original do componente State.js.'
     } 

    //  Aqui iremos criar uma estrutura de manipulacao do State do componente
    // Sera o método - em algum momento - chamado para manipular o state
    manipuladorState = () => {
        // chamada da função auxiliar log()
        // para ajudar a observar o comportamento do evento que sera disparado
        console.log('Botão clicado. Evento disparado');

        // Configurar o novo state do componente
        this.setState(
            {
               texto: 'Estou alterando o estado original do componente state quando o botão for clicado' 
            }
        )
    }


    // importar o metodo render
    render(){
        return(
            // construir uma view
            <div>
                <h3 className="state">{this.state.texto}</h3>
                <button className="botaoState" onClick={this.manipuladorState}>Clique Aqui</button>
            </div>
        )
    }
}

// exportar o componente para outros pedaços da aplicação
export default State;
