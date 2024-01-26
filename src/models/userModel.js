import { conn } from "../config/connection.js";

export const findUser = async (email) => {
    try {
        const [rows] = await conn.query('SELECT email, password FROM user WHERE ?;', email);
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }    
    } finally {
        conn.releaseConnection();
    };
};

export const createUser = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?;', [params]);
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        }    
    } finally {
        conn.releaseConnection();
    };
};