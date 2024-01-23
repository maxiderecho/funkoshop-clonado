/* Configuro capa de controladores para adminRoutes.js */

export const admin = (req, res) => {
    res.send("Admin");
};

export const createView = (req, res) => { 
    res.send("Create");
};

export const createItem = (req, res) => {
    res.send("Create post");
};

export const editView = (req, res) => {
    res.send("Edit");
};

export const editItem = (req, res) => {
    res.send("Edit post");
};

export const deleteItem = (req, res) => {
    res.send("Delete");
};