import { getConnection } from '../config/connection.js';

const conn = await getConnection();

/* Modelo para obtener todos los productos */
export const findAll = async () => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    };
};

/* Modelo para obtener un producto por un parámetro */
export const findOne = async (param) => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', param);
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    };
};

/* Modelo para crear un producto */
export const createOne = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, category_id, licence_id) VALUES ?;', [params]);
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    };
};

/* Modelo para editar un producto */
export const editOne = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    };
};

/* Modelo para eliminar un producto */
export const deleteOne = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
        conn.release();
        return rows;
    } catch (error) {
        return {
            error: true,
            message: 'Hemos encontrado un error: ' + error
        };
    };
};