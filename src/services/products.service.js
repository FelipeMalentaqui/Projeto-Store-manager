const { productsModel } = require('../models');

const getAll = async () => {
  const responseModel = await productsModel.getAll();

  // return ({ type: null, message: responseModel });
  return responseModel;
};

module.exports = {
  getAll,
};