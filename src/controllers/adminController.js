import { findAll, findOne, createOne, editOne, deleteOne } from '../models/productModel.js';
import { validationResult } from "express-validator";

/* Configuro capa de controladores para adminRoutes.js */

export const admin = async (req, res) => {

    const query = req.query;
    const items = await findAll();

    let filteredItems = items;

    if (query.search) {
        filteredItems = filteredItems.filter(item => {
            return item.product_name.trim().replace(/ /g, "").toLowerCase().includes(query.search.trim().toLowerCase()) 
            || item.category_name.replace(/ /g, "").toLowerCase().includes(query.search.trim().toLowerCase())
            || item.sku.replace(/ /g, "").toLowerCase().includes(query.search.trim().toLowerCase())
        });
    };

    res.render('../views/admin/admin.ejs', {
        title: 'Admin',
        filteredItems
    });
};

export const createView = (req, res) => { 
    res.render('../views/admin/create-item.ejs', {
        title: 'Crear Item'
    });
};

export const createItem = async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('../views/admin/create-item.ejs', {
            title: 'Creat Item',
            errors: errors.array()
        });
    }

    const product_DB = {
        product_name: req.body.nombre,
        product_description: req.body.descripcion,
        price: Number(req.body.precio),
        stock: Number(req.body.stock),
        discount: Number(req.body.descuento),
        sku: req.body.sku,
        dues: req.body.cuotas,
        image_front: '/img/products/' + req.files.imgFront[0].filename,
        image_back: '/img/products/' + req.files.imgBack[0].filename,
        category_id: Number(req.body.categoria),
        licence_id: Number(req.body.licencia)
    };
  
    await createOne([Object.values(product_DB)]);
  
    res.redirect('/admin');
};

export const editView = async (req, res) => {
    const {id} = req.params;
    const [product] = await findOne({product_id: id});

    res.render('../views/admin/edit-item.ejs', {
        title: 'Editar Item',
        product
    });
};

export const editItem = async (req, res) => {

    const { id } = req.params;
    const [product] = await findOne({product_id: id});

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('../views/admin/edit-item.ejs', {
            title: 'Editar Item',
            errors: errors.array(),
            product
        });
    }

    const haveImages = (Object.keys(req.files).length) !== 0;

    const product_DB = haveImages
    ? {
        product_name: req.body.nombre,
        product_description: req.body.descripcion,
        price: Number(req.body.precio),
        stock: Number(req.body.stock),
        discount: Number(req.body.descuento),
        sku: req.body.sku,
        dues: req.body.cuotas,
        image_front: '/img/products/' + req.files.imgFront[0].filename,
        image_back: '/img/products/' + req.files.imgBack[0].filename,
        category_id: Number(req.body.categoria),
        licence_id: Number(req.body.licencia)
    }
    : {
        product_name: req.body.nombre,
        product_description: req.body.descripcion,
        price: Number(req.body.precio),
        stock: Number(req.body.stock),
        discount: Number(req.body.descuento),
        sku: req.body.sku,
        dues: req.body.cuotas,
        category_id: Number(req.body.categoria),
        licence_id: Number(req.body.licencia)
    };

    await editOne(product_DB, {product_id: id});

    res.redirect('/admin');
};

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    await deleteOne({product_id: id});

    res.redirect('/admin');
};