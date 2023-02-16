const { salesModel } = require('../models');
// const { validateProductsId } = require('./validations/validateInputsValue');

const getAll = async () => {
  const responseModel = await salesModel.getAll();

  return responseModel;
};

const findById = async (id) => {
  const product = await salesModel.findById(id);

  if (!product.length) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

   return { type: null, message: product };
};

module.exports = {
  getAll,
  findById,
};