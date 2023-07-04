/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';




const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect( () => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;

    funcion(idCategoria)
      .then(res => setProductos(res))
  }, [ idCategoria])





  return (
    <>
    <h2 className='text-center m-5 animate__backInDown' style ={{fontSize: '3rem'}}> {props.greeting}</h2>
    <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer