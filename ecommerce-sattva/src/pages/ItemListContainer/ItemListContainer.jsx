import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../componentes/ItemList/ItemList';
import Loading from '../../componentes/Loading/Loading';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../..';

const ItemListContainer = ({greeting}) => {

    const [listaProductos, setListaProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
      useEffect(()=>{
        setLoading(true)
        const coleccionProductos= id ? query(collection(db, "products"), where("categoryId", "==", id)) : collection(db, "products");
        getDocs(coleccionProductos)
        .then((result)=> {
          const lista = result.docs.map((producto)=>{
            return{
              id:producto.id,
              ...producto.data()
            }
          })
          setListaProductos(lista)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
      }, [id])

      console.log(listaProductos)
      return (
        <div>
          <h2>
          {greeting}{' '}
          <span style={{ textTransform: 'capitalize', color: '#c737d7' }}/>

            {id && id}
           
          </h2>
          {loading === true 
          ? <Loading /> 
          : <ItemList listaProductos={listaProductos} />
          }

        </div>
      );
    };
    
export default ItemListContainer;