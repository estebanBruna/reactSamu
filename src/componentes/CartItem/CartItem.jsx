import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";



const CartItem = ({item, cantidad, img}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div>
        <h4> {item.nombre} </h4>
        {/* <img src={img} alt={item.nombre} /> */}
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem