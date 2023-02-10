import './Item.css'
import { useNavigate } from 'react-router-dom';

const Item = ({prod}) => {
  const{ title, price, imageId, id, stock } = prod ;
  const navegar = useNavigate();

return (
  <div className="card" style={{ width: '17rem', margin: '.5rem' }}>
    <img src={`../images/${imageId}`} className="card-img-top" alt={title} />
    <div className="card-body">
      <p className="card-text">{title}</p>
      <p className="card-text">${price}</p>
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

export default Item;