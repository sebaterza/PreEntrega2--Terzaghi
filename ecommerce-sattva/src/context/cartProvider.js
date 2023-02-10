import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        
        let newCart;
        let product = cart.find(prod =>prod.id === item.id)
        if(product){
            product.quantity += quantity;
            if(product.quantity > product.stock){
                alert('No hay stock disponible')
                return;
            }
            newCart = [...cart];

        } else{
            product ={
                name: item.title,
                price: item.price,
                quantity: quantity,
                category: item.categoryId,
                image: item.imageId,
                id: item.id,
                stock: item.stock,
            }
             newCart = [...cart, product]
        }
        setCart(newCart)
    }

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));

    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

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