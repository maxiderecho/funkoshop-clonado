import { findAll, findOne } from "../models/productModel.js";

/* Configuro capa de controladores para shopRoutes.js */
export const shop = async (req, res) => {
    const items = await findAll();

    res.render('../views/shop/shop.ejs', {
        title: 'Shop',
        items
    });
};

export const item = async (req, res) => {
    const { id } = req.params; 
    const items = await findAll();
    const [item] = await findOne({product_id: id})

    res.render('../views/shop/item.ejs', {
        title: 'Item',
        items,
        item
    });
};

export const addItem = (req, res) => {
    res.send('Agregar item al Carrito');
};

export const cart = (req, res) => {
    res.render('../views/shop/cart.ejs', {
        title: 'Carrito'
    });
};