import './Item.css'
import { useNavigate } from 'react-router-dom';

const Item = ({prod}) => {
  const{ titulo, precio, img, id, stock } = prod ;
  const navegar = useNavigate();

return (
  <div className="card" style={{ width: '17rem', margin: '.5rem' }}>
    <img src={img} className="card-img-top" alt={titulo} />
    <div className="card-body">
      <p className="card-text">{titulo}</p>
      <p className="card-text">${precio}</p>
      <p className="card-text">stock: {stock}</p>
      

    </div>

    <button
      className="btn btn-primary"
      onClick={() => navegar(`/item/${id}`)}
    >
      Ver más
    </button>
  </div>
);
};

export default Item;