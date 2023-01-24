import { useEffect, useState } from "react"
import { getProducts } from "../../Mock/Productos";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getProduct } from "../../Mock/Productos";

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProduct(id)
      .then( (res => {setDetalleProducto(res)}))
      .catch((error) => console.log(error))
  }, [id]);

  return (
    <div> 
      <ItemDetail detalleProducto = {detalleProducto} />  
    </div>
  )
}

export default ItemDetailContainer