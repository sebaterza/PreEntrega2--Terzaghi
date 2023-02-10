import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        console.log(item.imageId)
        const newProduct = {
            name: item.title,
            price: item.price,
            quantity: quantity,
            category: item.categoryId,
            image: item.imageId,
        }
        setCart([...cart,  newProduct])
        console.log(cart);
    }

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));

    }

    const isInCart = () => {}

    const clear = () => {
        setCart([])
    }

  return (
    <cartContext.Provider value={{ cart, addItem, clear, removeItem }}>
        {/* App.js */}
        {children}
    </cartContext.Provider>
    )
}

export default CartProvider;