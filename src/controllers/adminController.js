import { findAll, findOne, createOne, editOne, deleteOne } from '../models/productModel.js';
import { licences } from "../models/licenceModel.js";
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

export const createView = async (req, res) => { 
    const licence = await licences();

    res.render('../views/admin/create-item.ejs', {
        title: 'Crear Item',
        licence
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
      image_front: req.files.imgFront ? '/img/products/' + req.files.imgFront[0].filename : '/img/prueba/goku-super-saiyan-1.png',
      image_back: req.files.imgBack ? '/img/products/' + req.files.imgBack[0].filename : '/img/prueba/goku-super-saiyan-box.png',
      category_id: Number(req.body.categoria),
      licence_id: Number(req.body.licencia)
    };

    try {
        await createOne([Object.values(product_DB)]);        
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    } finally {
        res.redirect('/admin');
    };
  
};

export const editView = async (req, res) => {
    const {id} = req.params;
    const licence = await licences();
    const [product] = await findOne({product_id: id});

    res.render('../views/admin/edit-item.ejs', {
        title: 'Editar Item',
        product,
        licence
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
    };

    const product_DB = {
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

    if (req.files.imgFront && req.files.imgFront[0]) {
        product_DB.image_front = '/img/products/' + req.files.imgFront[0].filename;
    };

    if (req.files.imgBack && req.files.imgBack[0]) {
        product_DB.image_back = '/img/products/' + req.files.imgBack[0].filename;
    };

    try {
        await editOne(product_DB, {product_id: id});
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    } finally {
        res.redirect('/admin');
    };
};

export const deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteOne({product_id: id});
    } catch (error) {
        console.error("Ha ocurrido un error: " + error);
    } finally {
        res.redirect('/admin');
    };
};