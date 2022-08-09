import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // Esta é a construção da view principal do projeto novo-app
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Olá galera FullStack! Um olá mundo do ReactJS
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// Neste passo, o componente esta exposto para todos os "pedaços" do projeto
export default App;
