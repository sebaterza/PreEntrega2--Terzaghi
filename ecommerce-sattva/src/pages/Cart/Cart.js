import { useContext } from "react"
import { cartContext } from "../../context/cartContext"

const Cart = () => {

  const {cart, removeItem} = useContext(cartContext)
  console.log(cart)
  return (
    <div style={{padding:'40px', width: '1000px'}}>
        {cart.map((product) =>(
          <li key={product.id}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <img alt={product.id} src={`/images/${product.image}`} width="100px"/>
              <h3>{product.name}</h3>
              <h4>{product.category}</h4>
              <h4>{product.quantity}</h4>
              <h4>{product.price}</h4>
              
              <button onClick={() => removeItem(product.id)} style={{height: '30px'}}>Eliminar del carrito</button>
              
              
            </div>
            
          </li>
            
        ))}

    </div>
  )
}

export default Cart