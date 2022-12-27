import './App.css';
import Navbar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <ItemListContainer greeting="Bienvenido a la tienda de Sattva"/>    

    </div>
  );
}

export default App;
