import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartiItem.css"



const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div>

      <div className="contenedor">
        <h5> {item.nombre} </h5>
        <img src={item.img} alt={item.nombre} />
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button className="btnEliminar" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      </div>
      <br />
      <hr />
      <br />
    </div>

  )
}

export default CartItem