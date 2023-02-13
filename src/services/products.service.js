const { productsModel } = require('../models');
const { validateNameProduct } = require('./validations/validateInputsValue');

const getAll = async () => {
  const responseModel = await productsModel.getAll();

  // return ({ type: null, message: responseModel });
  return responseModel;
};

const findById = async (id) => {
  const responseModel = await productsModel.findById(id);
  
  // console.log(responseModel, 'response da model');
  
  if (!responseModel) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: responseModel };
};

const create = async (name) => {
  const error = validateNameProduct(name);
  if (error.type) return error;

  const responseModel = await productsModel.create(name);

  // if (!responseModel) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: responseModel };
};

module.exports = {
  getAll,
  findById,
  create,
};