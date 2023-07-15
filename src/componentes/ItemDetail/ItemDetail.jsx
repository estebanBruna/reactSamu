import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./ItemDetail.css";
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({id, nombre, precio, img, stock}) => {
  

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);
   

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  } 
  return (
    <div style={{ width: '20rem', border: '2px solid #526F4A', borderRadius: '5%', margin: '5rem', padding: '35px', backgroundColor: 'whitesmoke', color: "#526F4A"}}>
        <h2>Nombre: {nombre} </h2>
        <h3> Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p> Descripcion del producto </p>
        <img src={img} alt={nombre} style={{ width: '100%', borderRadius: '5%', marginBottom: "30px" }}/>
        {
          //Empleamos la logica del montaje y desmontaje de componentes.
          agregarCantidad > 0 ? (<Link to="/cart" className='btnTerminarCompra' > Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail