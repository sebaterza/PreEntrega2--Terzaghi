import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../componentes/ItemList/ItemList';
import { getProducts } from '../../Mock/Productos';


const ItemListContainer = ({props}) => {

    const [listaProductos, setListaProductos] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        getProducts()
          .then((res) => {
            if (id) {
              setListaProductos(res.filter((item) => item.category === id));
            } else {
              setListaProductos(res);
            }
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, [id]);


      return (
        <div>
          <h2>
          {props.greeting}
            
            {id && id}
           
          </h2>
          {<ItemList listaProductos={listaProductos} />}
        </div>
      );
    };
    
export default ItemListContainer;