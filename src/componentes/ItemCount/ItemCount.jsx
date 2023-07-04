/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCount = ({stock, inicial}) => {
    
    const [contador, setContador] = useState(inicial);
    
    
    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () =>{
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () =>{
        alert('Item agregado al carrito')
    }

  return (
    <div className='m-5'>

        <Card style={{ width: '21rem', border: '1px solid black'}}>
            <Card.Img style={{border: '0.75px solid black'}} variant="top" src="./img/beige.PNG" />
            <Card.Body>
                <Card.Title>Gorra Beige</Card.Title>
                <Card.Text>
                    Gorra de Tela visera Beige 
                </Card.Text>
                <Button onClick={aumentarContador}> + </Button>
                <strong className='m-2'> {contador} </strong>
                <Button onClick={disminuirContador}> - </Button>
                <Button onClick={agregarAlCarrito} className='m-3' variant="primary">Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    </div>

  )


}

export default ItemCount