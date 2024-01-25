import { findAll } from "../models/productModel.js";

/* Configuro capa de controladores para mainRoutes.js */
export const home = async (req, res) => {
    const items = await findAll();

    res.render('../views/index.ejs', {
        title: 'Home',
        items
    });
};

export const contact = (req, res) => { 
    res.render('../views/contact.ejs', {
        title: 'Contacto'
    });
};

export const about = (req, res) => {
    res.redirect('/');
};