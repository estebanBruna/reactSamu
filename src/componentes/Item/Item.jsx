/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './Item.css'
const Item = ({ id, nombre, precio, img }) => {
  return (
    <div style={{ width: '16rem', border: '1px solid black', borderRadius: '5%', margin: '5rem', padding: '1rem', backgroundColor: '#b2b2b2'}}>

      <img src={img} alt={nombre} style={{ width: '100%', borderRadius: '5%' }} />
      <h3 className="m-3" >Nombre: {nombre}</h3>
      <p className="m-3" >Precio: {precio}</p>
      <p className="m-3" >ID: {id}</p>
      <Link className="m-3" id={'verDetalles'} to={`/item/${id}`} style={{textDecoration: 'none', color: 'white', fontSize: '1rem', border: 'blue 1px solid', borderRadius: '5px', backgroundColor: 'blue', padding: '0.5rem'}} > Ver Detalles </Link>

    </div>
  )
}

export default Item