import express from 'express';
import { admin , createView , createItem , editView , editItem , deleteItem } from '../controllers/adminController.js';

/* Configuramos Express Router */
export const adminRouter = express.Router();

adminRouter.get("/", admin);
adminRouter.get("/create", createView);
adminRouter.post("/create", createItem);
adminRouter.get("/edit/:id", editView);
adminRouter.put("/edit/:id", editItem);
adminRouter.delete("/delete/:id", deleteItem);

