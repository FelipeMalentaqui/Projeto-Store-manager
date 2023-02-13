const { salesModel } = require('../models');

const getAll = async () => {
  const responseModel = await salesModel.getAll();

  return responseModel;
};

const findById = async (id) => {
  const responseModel = await salesModel.findById(id);

  // if (!responseModel) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  console.log(responseModel, 'resposta da model');

  return { type: null, message: responseModel };
};

module.exports = {
  getAll,
  findById,
};