import Item from "../Item/Item"

export function ItemList({listaProductos}) {
  return(

    <div>

      { listaProductos.map( (prod) => (
        <Item key={prod.id} prod={prod} />
          
      ))}
      
    </div>
  )
}

export default ItemList;