import { useEffect, useState } from "react"
import { ItemDetail } from "../../componentes/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import  arreglo from "../ItemListContainer/ItemListContainer"

const ItemDetailContainer = ({producto}) => {
  const [singleProduct, setSingleProduct] = useState({});
  const parametro = useParams();

  useEffect(()=>{
    const getProduct =()=>{
      return new Promise ((res,rej) =>{
        const productoFiltrado = arreglo.find(
          (prod) => prod.id === parseInt(parametro.id)
        );
        setTimeout(() => {
          res(productoFiltrado)
        }, 800);
      })
    }

    getProduct
      .then((res)=>{
        setSingleProduct(res);
        console.log(res);
      })
      .catch((error)=> {console.log(error)
      });
  },[])




  {/*useEffect(()=>{

    {const getProduct = ()=>{
        return new Promise((res,rej)=>{
          const productoFiltrado = arreglo.find(
            (prod)=> prod.id === parseInt(parametro.id)
          );
          setTimeout(()=>{
            res(productoFiltrado)
          }, 800)
        })
      }
      getProduct()
      .then((res)=>{
        setProducto(res)
      })
      .catch((error)=>{
        console.log(error);
      })
    }, [])   */}


  return (
    <div>
      <ItemDetail producto={singleProduct} />  
    </div>
  )
}

export default ItemDetailContainer