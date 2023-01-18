import { useEffect, useState } from "react";
import arreglo from "../ItemListContainer/ItemListContainer";
import Productos from "../../componentes/Productos/Productos";

const Home = () => {
    const[productosList, setProductosList ] = useState([]);

    const getProducts = fetch (arreglo, {
        method: 'GET'
        }
    );

  useEffect(() => {
    getProducts
    .then(resp => resp.json())
    .then((data) => {
      setProductosList(data.results)
      console.log(data.results)
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <div>
      {productosList.map((productos) => (
        <Productos key={productos.name} productosItem ={productos}/>
      ))}
    </div>
  );
};

export default Home