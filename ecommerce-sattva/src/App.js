import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/cartProvider';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>

        <div className="App">
            <Navbar />
        </div>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path= '/' element= {<ItemListContainer greeting="Bienvenido a la tienda de Sattva"/>} /> 
          <Route path="/categoria/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}  />
          <Route path="cart" element={<Cart />}/>
        </Routes>  
          
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
