import React from "react";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";

export const CartWidget = () => {
    const {cart} = useContext(cartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => { 
        setTotal(
            cart.reduce((prev, curr) => {
            console.log(prev, curr)
            return prev + curr.quantity;
        }, 0))
    }, [cart])

    return (
        <a>🛒
            <span>
                {total}
            
            </span>
        </a>
     );
}
