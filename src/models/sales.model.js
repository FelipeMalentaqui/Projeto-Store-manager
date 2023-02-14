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
    'SELECT * FROM StoreManager.sales_products WHERE sale_Id = ?',
    [id],
  );
  return camelize(result);
};
// 'SELECT * FROM StoreManager.sales_products WHERE id = ?',
module.exports = {
  getAll,
  getAllSales,
  findById,
};