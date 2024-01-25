/* Configuro capa de controladores para authRoutes.js */

export const login = (req, res) => {
    res.render('../views/auth/login.ejs', {
        title: 'Ingresar'
    });
};

export const doLogin = (req, res) => { 
    res.redirect('/');
};

export const register = (req, res) => {
    res.render('../views/auth/register.ejs', {
        title: 'Registrarse'
    });
};

export const doRegister = (req, res) => {
    res.redirect('/');
};

export const logout = (req, res) => {
    res.redirect('/');
};