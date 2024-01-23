/* Configuro capa de controladores para mainRoutes.js */

export const home = (req, res) => {
    res.send("Home");
};

export const contact = (req, res) => { 
    res.send("Contacto");
};

export const about = (req, res) => {
    res.send("Sobre nosotros");
};