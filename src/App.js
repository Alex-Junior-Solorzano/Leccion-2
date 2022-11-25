import './App.css';
import Card from './components/Card.jsx';
import Edad from './components/Edad.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  let nomPag =['Indice de Masa Corporal','Calculadora de Edad']
  return (
    <>
      <Navbar pagina= {nomPag[1]}/>
      <Edad />
    </>
  );
}

export default App;
