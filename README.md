# Tienda Crane
Es un ecommerce de gorras y pilusos unisex. Creado como proyecto de un curso de React. La aplicacion permite al usuario ver una lista de productos del tipo mencianado anteriormente y realizar compras en linea. Ordenes de compra y los productos de la tienda son almacenados en Firebase.

## Tecnologias usadas
- Vite 
- React
- React Router
- Firebase

## Funcionalidades 
- Ver una lista de productos seleccionables 
- Agregar productos a un carrito de compras
- Ver dicho carrito con los productos elegidos
- Proceder a la finalizacion de la compra de los productos seleccionados

## Instalacion 

### Para instalar y ejecutar la aplicacion en tu dispositivo de forma local, sigue las siguientes instrucciones: 
1. Clona el repositorio a tu dispositivo local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicacion. 
5. Abre tu navegador de preferencia e ingresa al link entregado en la terminal, http://localhost:5173 , para utilizar la aplicacion.

## Configuracion de Firebase

### Para utilizar Firebase en esta aplicacion, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la seccion "Authentication" de Firebase, habilita el proveedor de.
3. Autenticacion de correo electronico y contraseña. 
4. En la seccion "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la seccion "Proyecto settings" de Firebase, haz click en "Add app" y sigue las instrucciones para agregar una nueva aplicacion web. 
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia 
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para obtener mas informacion.

