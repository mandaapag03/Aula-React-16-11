import './App.css';
import Login from './components/Login';
import Texto from './components/Texto';

function App() {

  function primeiraFuncao() {
    alert("Amandaaa");
  }

  // renderiza HTML
  return (
    <div>
      {/* <Texto obj="Amanda" />
      <button onClick={primeiraFuncao}>
        Click me
      </button> */}

      <Login />
    </div>
  );
}

export default App;
