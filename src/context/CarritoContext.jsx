//1) Voy a importar el hook useState y createContext que me permite crear un contexto que almacenara toda la logica de mi carrito de compras.

import { useState, createContext } from "react";

//2) Creamos un nuevo contexto: 

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
})

//El valor inicial es un objeto con la propiedad "carrtio", "total" y "cantidadTotal";

export const CarritoProvider = ({children}) => {
    //3)Creamos un estado local llamado "carrito" con useState.

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //4) Agregamos algunos metodos para manipular el carrito de compras.

    //Provisoriamente verifico por consola
    console.log(carrito);


    //Funcion para agregar al carrito evitando duplicados:

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productoExistente) {
            setCarrito( prev => [...prev, {item, cantidad}]);
            setCantidadTotal( prev => prev + cantidad);
            setTotal( prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad:prod.cantidad + cantidad};
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio *cantidad));
        }
    }

    //Funcion para eliminar producto:

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));

    }

    //Funcion para vaciar el carrito: 
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal}}>
            {children}
        </CarritoContext.Provider>
    )

    //En el value enviamos el valor actual del carrito y los metodos a los componentes de mi aplicacion que lo necesiten.

    //Children, usamos esta porpiedad especial para representar a todos aquillos componenetes que puedan necesitar el carrito y sus metodos
}