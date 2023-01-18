import { useEffect, useState } from "react"
import { ItemDetail } from "../../componentes/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import  arreglo from "../ItemListContainer/ItemListContainer"

import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ItemDetailContainer = ({producto}) => {
  const [singleProduct, setSingleProduct] = useState({});

  const {id} = useParams();

  console.log(id)

  const getProduct = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([arreglo]);
    },2000);  
  })

  useEffect(()=>{
    getProduct
      .then((data)=>{
        setSingleProduct(data);
        console.log(data);
      })
      .catch((error)=> {console.log(error)
      });
  },[])
  
  return (
    <div>
      <ItemDetail producto={singleProduct} />  
    </div>
  )
}

export default ItemDetailContainer