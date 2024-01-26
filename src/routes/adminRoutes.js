import express from 'express';
import { admin , createView , createItem , editView , editItem , deleteItem } from '../controllers/adminController.js';

/* Configuramos Express Router */
export const adminRouter = express.Router();

const isLoggedAdmin = (req, res, next) => {
    if (req.session.isLoggedAdmin) {
        return next ();
    }

    res.send('Necesitas estar registrado para acceder.')
}

adminRouter.get("/", isLoggedAdmin, admin);
adminRouter.get("/create", isLoggedAdmin, createView);
adminRouter.post("/create", isLoggedAdmin, createItem);
adminRouter.get("/edit/:id", isLoggedAdmin, editView);
adminRouter.put("/edit/:id", isLoggedAdmin, editItem);
adminRouter.delete("/delete/:id", isLoggedAdmin, deleteItem);

