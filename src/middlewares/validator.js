import { body } from 'express-validator';
import { findUser } from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const loginValidation = [
    body('email')
        .notEmpty()
        .withMessage('Ingrese información válida.')
        .bail()
        .isEmail()
        .withMessage('Ingrese información válida.')
        .bail()
        .custom(async value => {
            const [user] = await findUser({email: value});
            if (!user) {
                throw new Error('Los datos ingresados son incorrectos.');
            };
        }),
    body('password')
        .if(body('email').notEmpty().isEmail())
        .custom(async (value, {req}) => {
            const { email } = req.body;
            const [user] = await findUser({email: email})
            if (typeof user != 'undefined') {
                if (!(await bcrypt.compare(value, user.password))) {
                    throw new Error('Los datos ingresados son incorrectos.');
                };
            };
        })
];

export const registerValidation = [
    body('name')
        .notEmpty()
        .withMessage('Ingrese su nombre.'),
    body('lastname')
        .notEmpty()
        .withMessage('Ingrese su apellido.'),
    body('email')
        .notEmpty()
        .withMessage('Ingrese un correo.')
        .bail()
        .isEmail()
        .withMessage('Ingrese un correo válido.')
        .bail()
        .custom(async value => {
            const [existingUser] = await findUser({email: value});
            if (existingUser) {
                throw new Error('El correo elegido ya está en uso.');
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('Ingrese una contraseña.')
        .bail()
        .isLength({min: 6})
        .withMessage('La contraseña debe tener al menos 6 caracteres.'),
    body('password__repeat')
        .if(body('password').notEmpty().isLength({min: 6}))
        .notEmpty()
        .withMessage('Por favor repita su contraseña.')
        .bail()
        .custom((value, {req}) => {
            return value == req.body.password;
        })
        .withMessage('Las contraseñas no coinciden.'),
    body('password')
        .customSanitizer(async (value) => await bcrypt.hash(value, 12)),
    body('terminos')
        .notEmpty()
        .withMessage('Acepte los términos y condiciones para avanzar.')    
];

export const adminLoggedValidation = (req, res, next) => {
    if (req.session.isLoggedAdmin) {
        return next ();
    }

    res.render('./errorAdmin.ejs', {
        title: 'Credenciales inválidas'
    })
};