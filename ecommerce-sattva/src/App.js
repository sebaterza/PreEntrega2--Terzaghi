import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (

    <BrowserRouter>

      <div className="App">
        
          <Navbar />

      </div>

      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path= '/' element= {<ItemListContainer greeting="Bienvenido a la tienda de Sattva"/>} /> 
        <Route path="/categoria/:ItemConsole" element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}  />
      </Routes>  

    </BrowserRouter>
  );
}

export default App;
