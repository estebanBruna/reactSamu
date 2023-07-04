import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div style={{ width: '16rem', border: '1px solid black', borderRadius: '5%', margin: '5rem', padding: '1rem', backgroundColor: '#b2b2b2'}}>
        <h2>Nombre: {nombre} </h2>
        <h3> Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p> Descripcion del producto </p>
        <img src={img} alt={nombre} style={{ width: '100%', borderRadius: '5%' }}/>
    </div>
  )
}

export default ItemDetail