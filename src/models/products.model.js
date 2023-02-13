const connection = require('./connection');

const getAll = async () => {
  const [response] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return response;
};

const findById = async (id) => {
  const [[response]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return response;
};

const create = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES(?)',
    [name],
  );
  return insertId;
};

module.exports = {
  getAll,
  findById,
  create,
};