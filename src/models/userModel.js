import { getConnection } from "../config/connection.js";

export const findUser = async (email) => {
    try {
        const conn = await getConnection();
        const [rows] = await conn.query('SELECT email, password FROM user WHERE ?;', email);
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }    
    };
};

export const createUser = async (params) => {
    try {
        const conn = await getConnection();
        const [rows] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?;', [params]);
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }    
    };
};