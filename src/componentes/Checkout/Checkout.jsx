
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css"



const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    //Funciones y validaciones 

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos solicitados");
            return;
        }

        //Validacion que los campos del email coincidan
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return
        }

        //Objeto con los datos de la orden de compra
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email

        };


        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
                //Modificacion del stock y subo la informacion actualizada
            })
        )
            .then(() => {
                //Guardo la orden en la base de datos
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden, por favor vuelva a intentarlo");
                    })
            })
            .catch((error) => {
                console.log("No se puede actualizar el stock", error);
                setError("No se puede actualizar el stock, intente mas tarde");
            })



    }



    return (
        <div className="divPadre">
            <h2 className="tituloCheckOut"> Checkout </h2>
            {
                carrito.map(producto => (
                    <div className="productoCheckout" key={producto.item.id} >
                        <div className="contenedorDetalles">
                            <img src={producto.item.img} alt={producto.item.nombre} />
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> precio: {producto.item.precio} </p>
                        </div>
                    </div>
                ))

            }

            <hr style={{width: "97%", margin: "0 auto"}}/>
            
            {   <div className="precioTotal">
                    <p>Cantidad total de productos: {cantidadTotal} </p>
                    <p> Total: ${total}</p>
                </div>
            }


            <form className="formulario" onSubmit={manejadorFormulario} >





                <div className="formGroup">
                    <label htmlFor="nombre"> Nombre </label>
                    <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                </div>

                <div className="formGroup">
                    <label htmlFor="apellido"> Apellido </label>
                    <input id="apellido" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                </div>

                <div className="formGroup">
                    <label htmlFor="telefono"> Teléfono </label>
                    <input id="telefono" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                </div>

                <div className="formGroup">
                    <label htmlFor="email"> Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>

                <div className="formGroup">
                    <label htmlFor="emailConfirmacion"> Confirmacion Email </label>
                    <input id="emailConfirmacion" type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="btnFinalizarCompra" type="submit"> Finalizar Compra</button>
            </form>

            {
                ordenId && (
                    <strong > Gracias por tu compra! Tu numero de orden es {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout