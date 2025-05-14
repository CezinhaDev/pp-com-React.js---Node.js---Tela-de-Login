import logo from  './logo.svg'; // Importa um arquivo SVG (imagem) chamado 'logo'.
import './App.css'; // Importa o arquivo CSS para estilizar o componente.
import Login from './componentes/login';


function App() { // Define o componente funcional 'App'.
  return (
    <div className="App">
      <header className="App-header">
       <Login />
      </header>
    </div>
  );
}

export default App; // Exporta o componente para ser usado em outros arquivos.