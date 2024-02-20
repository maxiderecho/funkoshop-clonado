import { getConnection } from "../config/connection.js";

export const findUser = async (email) => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('SELECT email, password FROM user WHERE ?;', email);
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    } finally {
        if (conn) {
            conn.release();
        };
    };
};

export const createUser = async (params) => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('INSERT INTO user (name, lastname, email, password) VALUES ?;', [params]);
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    } finally {
        if (conn) {
            conn.release();
        };
    };
};