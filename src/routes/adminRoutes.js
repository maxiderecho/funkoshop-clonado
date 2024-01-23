import express from 'express';

/* Configuramos Express Router */
export const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {res.send("Admin")});
adminRouter.get("/create", (req, res) => {res.send("Create")});
adminRouter.post("/create", (req, res) => {res.send("Create post")});
adminRouter.get("/edit", (req, res) => {res.send("Edit")});
adminRouter.put("/edit", (req, res) => {res.send("Edit put")});
adminRouter.delete("/delete", (req, res) => {res.send("Delete")});

