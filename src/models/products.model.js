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

const create = async ({ name }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES(?)',
    [name],
  );
  return insertId;
};

const update = async (name, id) => {
  console.log(name, id, 'model');
  const [{ affectedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name.name, id],
  );
  return affectedRows;
};

const destroy = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
    // console.log(result);
  return affectedRows;
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  destroy,
};