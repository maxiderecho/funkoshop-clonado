import { findUser , createUser } from "../models/userModel.js";
import { validationResult } from "express-validator";

/* Configuro capa de controladores para authRoutes.js */

export const login = (req, res) => {
    res.render('../views/auth/login.ejs', {
        title: 'Ingresar',
    });
};

export const doLogin = async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('../views/auth/login.ejs', {
            title: 'Ingresar',
            errors: errors.array()
        });
    }

    const { email , password } = req.body;
    const [user] = await findUser({email: email});
    
    const validation = () => { 
        const validateEmail = (user.email == email) ? true : false;
        const validatePassword  = (user.password == password) ? true : false;
        const userValidate = validateEmail && validatePassword;

        if (userValidate) {
            if (email == 'admin.funkoshop@gmail.com') {
                req.session.isLoggedAdmin = true;
                return res.redirect('/admin');
            } else {
                req.session.isLogged = true;
                return res.redirect('/');
            };
        };
    }

    if ((user == undefined) || (password != user.password)) {
        return res.render('../views/auth/login.ejs', {
            title: 'Ingresar',
            credentials: 'Los datos son incorrectos.'
        });
    };

    return validation();
};

export const register = (req, res) => {
    res.render('../views/auth/register.ejs', {
        title: 'Registrarse',
        body: {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }
    });
};

export const doRegister = async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.render('../views/auth/register.ejs', {
            title: 'Registrarse',
            errors: errors.array(),
            body: {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            }
        });
    }

    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
     }

     await createUser([Object.values(user)])

     res.redirect('/home');
};

export const logout = (req, res) => {
    req.session.isLogged = false;
    req.session.isLoggedAdmin = false;
    return res.redirect('/');
};