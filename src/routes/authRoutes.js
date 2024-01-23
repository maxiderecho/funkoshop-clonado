import express from 'express';
import { login , doLogin , register , doRegister , logout } from '../controllers/authController.js';

/* Configuramos Express Router */
export const authRouter = express.Router();

authRouter.get("/login", login);
authRouter.post("/login", doLogin);
authRouter.get("/register", register);
authRouter.post("/register", doRegister);
authRouter.get("/logout", logout);
