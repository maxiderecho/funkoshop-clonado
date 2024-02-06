import express from 'express';
import { shop , item , addItem , cart, deleteItemCart } from '../controllers/shopController.js';

/* Configuramos Express Router */
export const shopRouter = express.Router();

shopRouter.get("/", shop);
shopRouter.get("/item/:id", item);
shopRouter.post("/item/:id", addItem);
shopRouter.get("/cart", cart);
shopRouter.delete("/cart/:id", deleteItemCart)