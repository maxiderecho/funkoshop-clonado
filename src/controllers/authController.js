/* Configuro capa de controladores para authRoutes.js */

export const login = (req, res) => {
    res.send("Login");
};

export const doLogin = (req, res) => { 
    res.send("Login post");
};

export const register = (req, res) => {
    res.send("Register");
};

export const doRegister = (req, res) => {
    res.send("Register post");
};

export const logout = (req, res) => {
    res.send("Logout");
};