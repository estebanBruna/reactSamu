import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";





const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();


  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))

  }, [idCategoria])


  return (
    <>
      <h2 className='text-center m-5 animate__backInDown' style={{ fontSize: '3rem' }}> {props.greeting}</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer