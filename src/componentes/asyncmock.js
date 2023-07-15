/* eslint-disable no-unused-vars */
const misProductos = [
    {id:"1", nombre: 'gorra', precio: 2000, stock: 10, img: "../img/beige.PNG", idCat: "2"},
    {id:"2", nombre: 'gorra', precio: 2000, stock: 8, img: "../img/beige.PNG", idCat: "2"},
    {id:"3", nombre: 'piluso', precio: 1500, stock: 6, img: "../img/piluso.PNG", idCat: "3"},
    {id:"4", nombre: 'piluso', precio: 1500, stock: 12, img: "../img/piluso.PNG", idCat: "3"},
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos un nueva funcion similar a la anterior pero que nos retorne un solo item

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto)
        }, 100)
    })
}

//Funcion que me retorna un array de una categoria de producto determinada

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}