/* Configuro capa de controladores para shopRoutes.js */

export const shop = (req, res) => {
    res.send("Shop");
};

export const item = (req, res) => { 
    res.send("Item");
};

export const addItem = (req, res) => {
    res.send("Agregar item al carrito");
};

export const cart = (req, res) => {
    res.send("Carrito");
};