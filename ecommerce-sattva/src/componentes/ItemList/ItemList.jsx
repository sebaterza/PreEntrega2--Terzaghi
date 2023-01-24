import Item from "../Item/Item"

export function ItemList({listaProductos}) {
  return(

    <div  
      style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>

      { listaProductos.map( (prod) => (
        <Item key={prod.id} prod={prod} />
          
      ))}
      
    </div>
  )
}

export default ItemList;