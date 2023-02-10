import { useEffect, useState } from "react"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../..";
import Loading from "../../componentes/Loading/Loading";

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const[loading, setLoading] = useState(true)
  const { id } = useParams();
  
  useEffect(()=>{
    //le decimos nuestra base de datos y en que collection tiene que ir
    const coleccionProd = collection(db, "products")
    // hacer una referencia que me traiga el ID del useParams
    const referenciaDoc = doc(coleccionProd, id)
    //traemos el documento
    getDoc(referenciaDoc)
    .then((result)=>{
      setDetalleProducto({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <div> 
      {loading === true 
          ? <Loading /> 
          : <ItemDetail detalleProducto = {detalleProducto} /> 
          }
       
    </div>
  )
}

export default ItemDetailContainer