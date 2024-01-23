import express from 'express';

/* Configuramos Express Router */
export const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {res.send("Shop")});
shopRouter.get("/item/:id", (req, res) => {res.send("Item")});
shopRouter.post("/item/:id", (req, res) => {res.send("Agregar item al carrito")});
shopRouter.get("/cart", (req, res) => {res.send("Cart")});