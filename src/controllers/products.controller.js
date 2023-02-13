const { productsService } = require('../services');
const { mapError } = require('../utils/errorMap');

const getAll = async (req, res) => {
  // const { type, message } = await productsService.getAll();
  const response = await productsService.getAll();
  // if (type.error) return res.status(404).json(message);

  // return res.status(200).json(message);
  return res.status(200).json(response);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  // const response = await productsService.findById(id);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
  // return res.status(200).json(response);
};

module.exports = {
  getAll,
  findById,
};