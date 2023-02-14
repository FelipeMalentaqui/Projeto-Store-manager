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
  const error = validateNameProduct(name);
  if (error.type) return error;
  console.log(name, id, 'service'); // ProdutoX 2 service
  
  const existId = await productsModel.findById(id);
  console.log(existId, 'id'); // BinaryRow { id: 2, name: 'Traje de encolhimento' }
  if (existId === undefined) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
   if (name === undefined) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  const resultUpdate = await productsModel.update(name, id);
  if (!resultUpdate) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  console.log(name, id, 'service2');
  return { type: null, message: { id, name } };
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