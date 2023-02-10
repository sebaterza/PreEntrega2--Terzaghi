import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";


const ItemDetail = ({detalleProducto}) => {

  const {addItem} = useContext(cartContext);

  const { title, description, price, stock, imageId, id } = detalleProducto;
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} items`);
    addItem(detalleProducto, cantidad);
  };
  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem',
    }}>
        <h2>Detalle de: {title}</h2>
        <img src={`../images/${imageId}`} alt={title} width="250"/>
        <p>{description}</p>
        <ItemCount initial ={1} stock={stock} onAdd={onAdd} />
        
        
    </div>
        
  );
};

export default ItemDetail;