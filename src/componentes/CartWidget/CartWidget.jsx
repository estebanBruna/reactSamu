import'./CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';


export const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext);
  const imgCarrito = "../img/carrito.png";


  return (
    <div>
      <Link to="/cart">
        <img src={imgCarrito} alt="carrito-de-compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      
      </Link>





      
    </div>
  )
}
