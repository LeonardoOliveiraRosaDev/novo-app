// importar os recursos necessarios para transformar uma classe
// num componente.
import React, {Component} from "react";
import ('./Demo.css');



// definição de uma classe no JS (JavaScript)
// descrever elementos dos aqui, posteriormente 
// pode-se fazer uso..
class Demo extends Component{ // pára transformar uma classe num componente basta praticar o conceito de herança a partir da classe definida
    render(){
        return (// aqui metodo return "constrói" a estrutura view da tela e do conteudo que sera exibido pelo browswer
        <div>
            <h1 className="titulo">Primeiro Componente da classe ReactJs</h1>
        </div>
        )
    }
}

// exportar o componente Demo.js para todos os outros pedaços do projeto
export default Demo;