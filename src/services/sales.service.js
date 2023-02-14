const { salesModel } = require('../models');
// const { validateProducts } = require('./validations/validateInputsValue');

const getAll = async () => {
  const responseModel = await salesModel.getAll();

  return responseModel;
};

const findById = async (id) => {
  // const error = validateProducts(id);

  // if (error.type) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  const responseModel = await salesModel.findById(id);
//   console.log(responseModel, 'res'); //  [
//   { saleId: 1, productId: 1, quantity: 5 },
//   { saleId: 1, productId: 2, quantity: 10 }
// ] res
  const responseModelSales = await salesModel.getAllSales();
//   console.log(responseModelSales, 'resposta da model sales');
//   [
//   BinaryRow { id: 1, date: 2023-02-14T14:46:55.000Z },
//   BinaryRow { id: 2, date: 2023-02-14T14:46:55.000Z }
// ] resposta da model sales

  // const newReturn = await responseModel.filter(async (ele) => ele.saleId !== ele.saleId);
  // console.log(newReturn, 'filter');

  return { type: null, message: { responseModelSales, responseModel } };
};

module.exports = {
  getAll,
  findById,
};