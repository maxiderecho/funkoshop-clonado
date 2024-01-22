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

/* Inicio la instancia de express */
const app = express();

/* Declaro puerto */
const PORT = process.env.PORT;

/* Declaro carpeta de archivos estáticos */
app.use(express.static(path.join(__dirname + "/public")));

/* Inicio servidor */
app.listen(PORT, () => console.log(`Servidor corriendo en  http://localhost:${PORT}`));