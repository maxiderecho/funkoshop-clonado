import express from 'express';

/* Configuramos Express Router */
export const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {res.send("Home")});
mainRouter.get("/home", (req, res) => {res.send("Home")});
mainRouter.get("/contact", (req, res) => {res.send("Contact")});
mainRouter.get("/about", (req, res) => {res.send("About")});