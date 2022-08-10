import './App.css';
// importar os componentes do projeto
import Demo from './componentes/Demo';

function App() {
  return (
    // Esta é a construção da view principal do projeto novo-app
    <div className="App">
      <header className="App-header">
          <Demo />
      </header>
    </div>
  );
}
// Neste passo, o componente esta exposto para todos os "pedaços" do projeto
export default App;