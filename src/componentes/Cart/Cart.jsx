import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className="divNoHayProductos">
                    <h2> No hay productos en el carrito </h2>
                    <br />
                    <Link className="linkVerProductos" to="/"> Ver Productos</Link>
                </div>

            </>
        )
    }

    return (
        <div style={{ margin: "4rem" }} >
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <div className="contenedorCantidadTotal">
                <h3> Total: $ {total} </h3>
                <h3> Cantidad Total: {cantidadTotal}</h3>
                <button className="btnVaciarCarrito" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                <Link className="finalizarCompra" to="/checkout"> Finalizar Compra </Link>
            </div>
        </div>
    )
}

export default Cart