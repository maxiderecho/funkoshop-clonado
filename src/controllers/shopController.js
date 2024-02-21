import { findAll, findOne } from "../models/productModel.js";

/* Configuro capa de controladores para shopRoutes.js */
export const shop = async (req, res) => {

    const query = req.query;
    const items = await findAll();

    let filteredItems = items;

    if (query.search) {
        filteredItems = filteredItems.filter(item => {
            return item.product_name.replace(/ /g, "").toLowerCase().includes(query.search.toLowerCase()) 
            || item.licence_name.replace(/ /g, "").toLowerCase().includes(query.search.toLowerCase())
        });
    };

    if ((query.cat) && (query.cat != 'todos')) {
        filteredItems = filteredItems.filter(item => {
            return item.category_name.toLowerCase().includes(query.cat.toLowerCase())
        });
    };

    if (query.order) {
        switch (query.order) {
            case 'maxprice':
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case 'minprice':
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case 'az':
                filteredItems.sort((a, b) => a.product_name.localeCompare(b.product_name));
                break;
            case 'za':
                filteredItems.sort((a, b) => b.product_name.localeCompare(a.product_name));
                break;
            default:
                break;
        };
    };

    const minPrice = isNaN(parseInt(query.min)) ? 0 : parseInt(query.min);
    const maxPrice = isNaN(parseInt(query.max)) ? Number.MAX_VALUE : parseInt(query.max);

    if ((query.min) || (query.max)) {
        filteredItems = filteredItems.filter( item => {
            return item.price >= minPrice && item.price <= maxPrice;
        });
    };

    res.render('../views/shop/shop.ejs', {
        title: 'Shop',
        filteredItems
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

export const addItem = async (req, res) => {
    const { id } = req.params;
    const [item] = await findOne({product_id: id});
    const { quantity } = req.body;

    if (!req.session.cartItems) {
        req.session.cartItems = [];
    };

    const itemExists = req.session.cartItems.find(element => element.id === item.product_id);

    if (itemExists) {
        itemExists.quantity = Number(itemExists.quantity) + Number(quantity);
    } else {
        req.session.cartItems.push({ id: item.product_id, quantity: Number(quantity) });
    };

    res.redirect('/shop');
};

export const cart = async (req, res) => {

    const items = await findAll();

    res.render('../views/shop/cart.ejs', {
        title: 'Carrito',
        items: items
    });
};

export const deleteItemCart = (req, res) => {

    const { id } = req.params;

    const product = req.session.cartItems.findIndex(element => element.id == id);

    if (product != -1) {
        req.session.cartItems.splice(product, 1)
    };

    res.redirect('/shop/cart');

};

export const purchaseCart = (req, res) => {

    req.session.cartItems = [];
    res.locals.cartItems = req.session.cartItems;

    res.render('./shop/purchase.ejs', {
        title: 'Comprar'
    });
};