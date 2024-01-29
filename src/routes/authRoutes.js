import express from 'express';
import { login , doLogin , register , doRegister , logout } from '../controllers/authController.js';
import { loginValidation , registerValidation } from '../middlewares/validator.js';

/* Configuramos Express Router */
export const authRouter = express.Router();

authRouter.get("/login", login);
authRouter.post("/login", loginValidation, doLogin);
authRouter.get("/register", register);
authRouter.post("/register", registerValidation, doRegister);
authRouter.get("/logout", logout);
