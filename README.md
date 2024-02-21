# :shopping_cart: Funkoshop

Este proyecto de un e-commerce se basa en la clonación de una página web de una tienda de Funkos ficticia llamada Funkoshop.

La maquetación de la web:

https://www.figma.com/file/IjTSeE2BpRd5Gk9VakNIhC/Challenge-Integrador---Funkoshop?type=design&node-id=19905-435&mode=design

## :computer: Acceso a la web

El proyecto está desplegado en vercel.

Link: https://funkoshop-clonado.vercel.app/

## :framed_picture: Capturas

<div style="display: flex; flex-wrap: wrap;">
    <div style="flex: 0 0 50%; padding: 5px;">
        <image src="/public/img/capturas/screen-1.png" alt="Captura 1">
    </div>
    <div style="flex: 0 0 50%; padding: 5px;">
        <image src="/public/img/capturas/screen-2.png" alt="Captura 2">
    </div>
    <div style="flex: 0 0 50%; padding: 5px;">
        <image src="/public/img/capturas/screen-3.png" alt="Captura 3">
    </div>
    <div style="flex: 0 0 50%; padding: 5px;">
        <image src="/public/img/capturas/screen-4.png" alt="Captura 4">
    </div>
</div>


## Características

- Creación de Items: Dentro de las vistas protegidas (Admin, Crear Item y Editar Item) se podrá manipular el almacenamiento de datos de la web que luego se verá reflejada en la tienda, en el detalle de cada item y en la lista de productos en la página Admin. ***Lamentablemente Vercel no permite la carga de archivos, por lo tanto los items creados o editados no tendrán problema siempre y cuando no se agreguen las imagenes correspondientes al frente y al dorso de cada item. Se ha seleccionado una imagen predeterminada del frente y del dorso del producto para cuando son creados en Vercel y no queden vacíos. ***

- Sistema Login/Register: Se permite el registro e ingreso de usuarios nuevos. Estos usuarios se guardan en la base de datos con las contraseñas encriptadas. Los usuarios nuevos no tienen acceso a las vistas protegidas (Admin, Crear Item y Editar Item).

- Búsqueda de productos: En la tienda está permitida la búsqueda de productos por el nombre del mismo, por el nombre de la licencia, se puede seleccionar la categoría del mismo (funko, remera, llavero) e indicar un rango de precio. Lo mismo sucede en la pagina de Admin donde se puede buscar un producto por su código, nombre o categoría.

- Carrito de compras: Desde la página individual de cada producto, con el botón **"Agregar al carrito"**, el item es enviado al carrito de compras, donde se podrá manipular su cantidad, ver el precio total de la compra, eliminar el item de la lista y finalizar la compra. Además se muestra un contador en el header de los items agregados. Se deberá crear una cuenta de usuario para finalizar la compra.

- Acceso a vistas protegidas con el usuario admin: Con el usuario "**admin@gmail.com**" y su contraseña "**admin123**" se permite el acceso a las vistas de Admin, Crear Item y Editar Item.

- Actualización en tiempo real: Debido a las vistas dinámicas los items dentro de la tienda, de la página individual de cada item, del slider y las colecciones de la página de "Home" se sincronizan en tiempo real a causa de la conexión con la base de datos.

- Manejo de errores: Implementé manejo de errores para: **Error 404** - **Item no existente** - **Credenciales inválidas en el acceso a las vistas protegidas** - **Validaciones en el formulario de Login y Register** - **Validaciones en el formulario para crear y editar items** - **Errores al momento de crear, editar o eliminar items**.

## Arquitectura

El proyecto tiene una arquitectura MVC (Modelo - Vista - Controlador) organizando así el código por capas. 

También aplico el sistema CRUD (Create - Read - Update - Delete) sobre la información almacenada para lograr una administración de los datos de manera persistente.

## Dependencias

Hasta el momento las dependencias usadas dentro de Node.js para el correcto funcionamiento de la web son:

- bcriptjs
- cookie-session
- dotenv
- ejs
- express
- express-validator
- method-override
- multer
- mysql2

Utilizo 'nodemon' como dependencia de desarrollador.

## :gear: Tecnologías

Las tecnologías aplicadas son:

- HTML (Vistas con el motor EJS)
- CSS
- JavaScript
- Glide.js
- Node.js
- Express.js
- MySQL