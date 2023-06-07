const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT s.id AS saleId, s.date, p.product_id AS productId, p.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS p
  WHERE s.id = p.sale_id
  ORDER BY saleId ASC, productId ASC`,
  );
  return result;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s.date, p.product_id AS productId, p.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS p
  WHERE s.id = p.sale_id AND s.id = ?
  ORDER BY s.date ASC, productId ASC`,
    [id],
  );
  return result;
};

const create = async (body) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES(now())',
  );
    console.log(insertId, 'insertId');
  body.map(async (ele) => {
    const [result] = await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)',
      [insertId, ele.productId, ele.quantity],
    );
    console.log(result, 'result');
    return camelize(result);
  });
  // const responsePromise = await Promise.all(arr);
  
  return {
    id: insertId,
    itemsSold: body,
  };
};

module.exports = {
  getAll,
  getAllSales,
  findById,
  create,
};
