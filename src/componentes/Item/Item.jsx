
import { Link } from "react-router-dom"
import './Item.css'
const Item = ({ id, nombre, precio, img}) => {
  return (
    <div className='divCard'>

      <img src={img} alt={nombre} style={{ width: '100%', height: "15rem", borderRadius: '5%' }} />
      <h3 className="m-3" id={"colorLetrasCard"}>Nombre: {nombre}</h3>
      <p className="m-3" id={"colorLetrasCard"}>Precio: {precio}</p>
      <Link className="m-3" id={'verDetalles'} to={`/item/${id}`} > Ver Detalles </Link>

    </div>
  )
}

export default Item