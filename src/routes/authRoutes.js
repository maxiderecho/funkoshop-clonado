import express from 'express';

/* Configuramos Express Router */
export const authRouter = express.Router();

authRouter.get("/login", (req, res) => {res.send("Login")});
authRouter.post("/login", (req, res) => {res.send("Login post")});
authRouter.get("/register", (req, res) => {res.send("Register")});
authRouter.post("/register", (req, res) => {res.send("Register post")});
authRouter.get("/logout", (req, res) => {res.send("Logout")});
