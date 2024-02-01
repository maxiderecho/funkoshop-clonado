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
    res.render('../views/admin/create-item.ejs', {
        title: 'Crear Item'
    });
};

export const createItem = async (req, res) => {

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