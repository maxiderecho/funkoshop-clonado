import { findAll, findOne, createOne, editOne, deleteOne } from '../models/productModel.js';

/* Configuro capa de controladores para adminRoutes.js */

export const admin = async (req, res) => {
    const items = await findAll();

    res.render('../views/admin/admin.ejs', {
        title: 'Admin',
        items
    });
};

export const createView = (req, res) => { 
    res.render('../views/admin/create-item.ejs');
};

export const createItem = (req, res) => {
    res.redirect('/admin');
};

export const editView = async (req, res) => {
    const {id} = req.params;
    const [product] = await findOne({product_id: id});

    res.render('../views/admin/edit-item.ejs', {
        title: 'Edit Item',
        product
    });
};

export const editItem = (req, res) => {
    res.redirect('/admin');
};

export const deleteItem = (req, res) => {
    res.redirect('/admin');
};