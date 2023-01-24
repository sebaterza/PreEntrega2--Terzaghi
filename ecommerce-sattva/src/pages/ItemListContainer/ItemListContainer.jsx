import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../componentes/ItemList/ItemList';
import { getProducts } from '../../Mock/Productos';
import { getProductsByCategory } from '../../Mock/Productos';


const ItemListContainer = ({greeting}) => {

    const [listaProductos, setListaProductos] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        getProducts()
          .then((res) => {
            if (id) {
              setListaProductos(res.filter((item) => item.categoria === id));
            } else {
              setListaProductos(res);
            }
          })
          .catch((error) => console.log(error));
      }, [id]);


      return (
        <div>
          <h2>
          {greeting}{' '}
          <span style={{ textTransform: 'capitalize', color: '#c737d7' }}/>

            {id && id}
           
          </h2>
          {<ItemList listaProductos={listaProductos} />}
        </div>
      );
    };
    
export default ItemListContainer;