import { getConnection } from '../config/connection.js';

export const licences = async () => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('SELECT * FROM licence;');
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