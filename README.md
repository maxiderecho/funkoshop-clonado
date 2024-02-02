# :shopping_cart: Funkoshop

Este proyecto de un e-commerce se basa en la clonación de una página web de una tienda de Funkos ficticia llamada Funkoshop.

La maquetación de la web fue otorgada por el curso Codo a Codo 4.0.

https://www.figma.com/file/IjTSeE2BpRd5Gk9VakNIhC/Challenge-Integrador---Funkoshop?type=design&node-id=19905-435&mode=design

## :computer: Acceso a la web

El proyecto está desplegado en vercel.

Link: https://funkoshop-clonado.vercel.app/

## Características

- Sistema Login/Register: Se permite el registro e ingreso de usuarios nuevos. Estos usuarios se guardan en la base de datos con las contraseñas encriptadas. Los usuarios nuevos no tienen acceso a las vistas protegidas (Admin, Crear Item y Editar Item).

- Acceso a vistas protegidas con el usuario admin: Con el usuario "**admin@gmail.com**" y su contraseña "**admin123**" Se permite el acceso a las vistas de Admin, Crear Item y Editar Item. Dentro de estas vistas se podra manipular el almacenamiento de datos de la web que luego se verá reflejada en la tienda y en el detalle de cada item. *** Lamentablemente Vercel no permite la carga de archivos, por lo tanto los items creados o editados no tendrán problema siempre y cuando no se agreguen las imagenes correspondientes al frente y al dorso de cada item. ***

- Actualización en tiempo real: Debido a las vistas dinámicas los items dentro de la tienda, de la página individual de cada item y del slider son cargados de forma dinámica a través de la conexión con la base de datos.

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

Utilizo nodemon como dependencia de desarrollador.

## :gear: Tecnologías

Las tecnologías aplicadas son:

- HTML (Vistas con el motor EJS)
- CSS
- JavaScript
- Glide.js
- Node.js
- Express.js
- MySQL