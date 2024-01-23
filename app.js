import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

/* A través de fileURLToPath e import.meta.url genero la manera de
usar __dirname como se hace con CommonJS ya que ES Modules no posee
esa función */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Permite la utilización del archivo .env */
dotenv.config();

/* Declaro puerto */
const PORT = process.env.PORT;

/* Inicio la instancia de express */
const app = express();

/* Declaro carpeta de archivos estáticos */
app.use(express.static(path.join(__dirname, "/public")));

/* Importo y declaro rutas */

import { mainRouter } from './src/routes/mainRoutes.js';
import { shopRouter } from './src/routes/shopRoutes.js';
import { adminRouter } from './src/routes/adminRoutes.js';
import { authRouter } from './src/routes/authRoutes.js';


app.use("/", mainRouter);
app.use("/shop", shopRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);


/* Inicio servidor */
app.listen(PORT, () => console.log(`Servidor corriendo en  http://localhost:${PORT}`));