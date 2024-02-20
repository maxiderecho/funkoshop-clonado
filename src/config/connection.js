import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.PORT_DB,
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit:0
});

export const getConnection = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (err) {
        throw err;
    };
};