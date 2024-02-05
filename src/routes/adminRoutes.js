import express from 'express';
import { admin , createView , createItem , editView , editItem , deleteItem } from '../controllers/adminController.js';
import { upload } from '../middlewares/uploadFiles.js';

/* Configuramos Express Router */
export const adminRouter = express.Router();

const isLoggedAdmin = (req, res, next) => {
    if (req.session.isLoggedAdmin) {
        return next ();
    }

    res.render('./errorAdmin.ejs', {
        title: 'Credenciales inválidas'
    })
};

adminRouter.get("/", isLoggedAdmin, admin);
adminRouter.get("/create", isLoggedAdmin, createView);
adminRouter.post("/create", isLoggedAdmin, upload.fields([{ name: 'imgFront', maxCount: 1 }, { name: 'imgBack', maxCount: 1 }]), createItem);
adminRouter.get("/edit/:id", isLoggedAdmin, editView);
adminRouter.put("/edit/:id", isLoggedAdmin, upload.fields([{ name: 'imgFront', maxCount: 1 }, { name: 'imgBack', maxCount: 1 }]), editItem);
adminRouter.delete("/delete/:id", isLoggedAdmin, deleteItem);

