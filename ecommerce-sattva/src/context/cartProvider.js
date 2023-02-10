import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const newProduct = {
            name: item.titulo,
            price: item.precio,
            quantity: quantity,
            category: item.categoria,
        }
        setCart([...cart,  newProduct])
        console.log(cart);
    }

  return (
    <cartContext.Provider value={{ cart, addItem }}>
        {/* App.js */}
        {children}
    </cartContext.Provider>
    )
}

export default CartProvider;