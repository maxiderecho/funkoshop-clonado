import path from 'path';
import { fileURLToPath } from 'url';

/* A través de fileURLToPath e import.meta.url genero la manera de
usar __dirname como se hace con CommonJS ya que ES Modules no posee
esa función */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Permite la utilización del archivo .env */
import dotenv from 'dotenv';

dotenv.config();

/* Declaro puerto */
const PORT = process.env.PORT;

/* Inicio la instancia de express */
import express from 'express';

const app = express();

/* Configuro ejs para vistas dinámicas */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

/* Declaro carpeta de archivos estáticos */
app.use(express.static(path.join(__dirname, "/public")));

/* Convierte los datos recibidos por POST */
app.use(express.urlencoded());
app.use(express.json());

/* Configuro methodOverride para tome peticiones PUT y DELETE */
import methodOverride from 'method-override';

app.use(methodOverride('_method'));

/* Configuración de las Sessions */
import { initSession , userIsLogged , adminIsLogged } from './src/middlewares/session.js';

app.use(initSession);
app.use(userIsLogged);
app.use(adminIsLogged);

/* Importo y declaro rutas */
import { mainRouter } from './src/routes/mainRoutes.js';
import { shopRouter } from './src/routes/shopRoutes.js';
import { adminRouter } from './src/routes/adminRoutes.js';
import { authRouter } from './src/routes/authRoutes.js';

app.use("/", mainRouter);
app.use("/shop", shopRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

/* Manejo de error 404 */
app.use((req, res, next) => {
    res.status(404).render('./error404', {
        title: 'Error 404'
    });
    next();
});

/* Inicio servidor */
app.listen(PORT, () => console.log(`Servidor corriendo en  http://localhost:${PORT}`));