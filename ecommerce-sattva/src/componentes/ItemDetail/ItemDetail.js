import Item from "../Item/Item";

export const ItemDetail = ({producto}) => {
  return (

    <div>
        
        <img src={producto.img} alt={producto.nombre} width="200"/>
        <h2>{producto.nombre}</h2>
        <h2>{producto.categoria}</h2>
        <h3>{producto.descripcion}</h3>
        
    </div>
        
  )
}


export default ItemDetail;