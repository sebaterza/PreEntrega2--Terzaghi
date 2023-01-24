import './Item.css'

const Item = ({prod}) => {
  const{titulo, descripcion, precio, img, id, stock} = prod 

  return (
    <>
      <div >
      <img className="producto-img" src={img} alt="producto"/> </div>
      
      <div> 
      {id} 
      <br></br>
      {titulo}
      <br></br>
      {descripcion}
      <br></br>
      ${precio}
      <br></br>
      {stock}
      </div>
    
    </>
  )
}

export default Item