import { getConnection } from '../config/connection.js';

/* Modelo para obtener todos los productos */
export const findAll = async () => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
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

/* Modelo para obtener un producto por un parámetro */
export const findOne = async (param) => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', param);
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

/* Modelo para crear un producto */
export const createOne = async (params) => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, category_id, licence_id) VALUES ?;', [params]);
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

/* Modelo para editar un producto */
export const editOne = async (params, id) => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
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

/* Modelo para eliminar un producto */
export const deleteOne = async (params) => {
    let conn;

    try {
        conn = await getConnection();
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
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