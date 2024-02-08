import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.PORT_DB,
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit:0
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else { 
        console.log('Conexión a la base de datos exitosa.');
        conn.release();
    };
});

export const conn = pool.promise();