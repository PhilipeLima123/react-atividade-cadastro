import logo from './logo.svg';
import './App.css';
import Cadastro from './Cadastro/Cadastro';

function App() {
  return (
    <div className="App">
    
     <div className="div">

      <div className="div1">
        <Cadastro/>
        </div>

      <div className="div2">
        <img src={logo} className="logo" alt="logo" />
        <h1>App React</h1>
        </div>

     </div>

    </div>
  );
}

export default App;
