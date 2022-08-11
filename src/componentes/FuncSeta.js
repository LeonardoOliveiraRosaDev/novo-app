// Definir um novo componente Funcional
// a partir de uma expressão de função
// Função nomeado
// function umNome(){

// }

// função anonima
// let umaFuncao = function (){

// }


// função anonima 

const FuncSeta = (props) => {
    
    return(
        // construa uma view
        <div>
            <h2 className="titulo3"> Um salve do componente Funcional - Arrow function
             - ReactJs </h2>
             <h3><i>{props.Presente2}</i></h3>
        </div>
    )
}

// exportar / expor o componente para outros elementos do projeto
export default FuncSeta;