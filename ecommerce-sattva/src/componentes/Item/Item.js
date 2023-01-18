import './Item.css'

function Item({prod}) {
  const{titulo, categoria, descripcion, precio, img, id} = prod

  return (
    <>
      <div >
      <img className="producto-img" src={img} alt="producto"/> </div>
      
      <div> {id} 
      <br></br>
      {titulo}
      <br></br>
      {descripcion}
      <br></br>
      ${precio}
      </div>
    
    </>
  )
}


{/*const Item = ({producto}) => {
  return (
    <>
    <div className="producto-img"/>
    <img src={img} alt="producto"/>
    <li key = {producto.id}>{producto.titulo}{producto.img}</li>
    </>
  )
}*/}

export default Item