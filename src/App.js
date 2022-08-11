import './App.css';
// importar os componentes do projeto
import Demo from './componentes/Demo';
import DemoFunc from './componentes/DemoFunc';
import FuncSeta from './componentes/FuncSeta';
import Parent from './componentes/Parent';

function App() {
  return (
    // Esta é a construção da view principal do projeto novo-app
    <div className="App">
      <header className="App-header">
          <Demo />
          <DemoFunc />
          <FuncSeta />
          <Parent />
      </header>
    </div>
  )
}
// Neste passo, o componente esta exposto para todos os "pedaços" do projeto
export default App;