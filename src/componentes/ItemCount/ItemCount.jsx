/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./ItemCount.css"


const ItemCount = ({ stock, inicial, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial);


    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <div className='divContador'>
            <div>
                <Button id={"btnMas"} onClick={aumentarContador}> + </Button>
                <strong style={{color: '#526F4A'}} className='m-2'> {contador} </strong>
                <Button onClick={disminuirContador} id={"btnMenos"}> - </Button>
            </div>

            <Button onClick={() => funcionAgregar(contador)} className='' id='agregarCarrito'>Agregar al Carrito</Button>

        </div>

    )


}

export default ItemCount

