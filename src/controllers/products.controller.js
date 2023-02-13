const { productsService } = require('../services');

const getAll = async (req, res) => {
  // const { type, message } = await productsService.getAll();
  const response = await productsService.getAll();
  // if (type.error) return res.status(404).json(message);

  // return res.status(200).json(message);
  return res.status(200).json(response);
};

module.exports = {
  getAll,
};