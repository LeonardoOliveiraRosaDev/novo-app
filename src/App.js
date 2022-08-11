// app principal

import './App.css';
// importar os componentes do projeto
import Demo from './componentes/Demo';
import DemoFunc from './componentes/DemoFunc';
import FuncSeta from './componentes/FuncSeta';
import Parent from './componentes/Parent';
import State from './componentes/State';
function App() {
  return (
    // Esta é a construção da view principal do projeto novo-app
    <div className="App">
      <header className="App-header">
          <Demo />
          <DemoFunc />
          <FuncSeta />
          <Parent />
          <State />
      </header>
    </div>
  )
}
// Neste passo, o componente esta exposto para todos os "pedaços" do projeto
export default App;