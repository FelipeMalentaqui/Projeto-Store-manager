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

const update = async (name, id) => {
  const existId = await productsModel.findById(id);

  if (!existId) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModel.update(name, id);
  // console.log(name, id, 'service'); // { name: 'Martelo do Batman' } 1

  return { type: null, message: { ...name, id } };
};

const destroy = async (id) => {
  const existId = await productsModel.findById(id);

  if (!existId) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const responseModel = await productsModel.destroy(id);

  // console.log(result, 'result service');
  return { type: null, message: responseModel };
};

module.exports = {
  getAll,
  findById,
  create,
  update,
  destroy,
};