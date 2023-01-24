import { useEffect, useState } from "react"
import { getProducts } from "../../Mock/Productos";
import { ItemDetail } from "../../componentes/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalleProducto, setDetalleProducto] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProducts()
      .then((res) => setDetalleProducto(res.find((item) => item.id === id)))
      .catch((error) => console.log(error))
  }, [id]);

  return (
    <div>
      <ItemDetail detalleProducto = {setDetalleProducto} />  
    </div>
  )
}

export default ItemDetailContainer