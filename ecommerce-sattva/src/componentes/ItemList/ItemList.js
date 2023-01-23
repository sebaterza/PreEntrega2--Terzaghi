import Item from "../Item/Item"
import {Link} from 'react-router-dom'


export function ItemList({productos}) {
  return(

    <>
      { productos.map( (prod)=> (
        <Link key={prod.id} to={`item/${prod.id}`}>

          <Item prod={prod} Item/>
          
        </Link>

      ))}
      
    </>
  )
}



{/*const ItemList = ({productos}) => {
  return (
    <ul>
        {productos.map((producto) => (
            <Item producto={producto}/>
            
        ))}
        </ul>
  )
}*/}

export default ItemList