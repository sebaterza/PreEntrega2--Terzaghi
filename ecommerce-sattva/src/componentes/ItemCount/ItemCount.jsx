import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const[count, setCount] = useState(initial);
    const restar = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    };
    const sumar = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    };
  return (
    <div className="counter">
        <div className="controllers">
            <button onClick={restar}>-</button>
        <div>
            <span>{count}</span>
        </div>
            <button onClick={sumar}>+</button>
        </div>
        <button         
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
        >
        Comprar
        </button>
    </div>
  )
}

export default ItemCount;