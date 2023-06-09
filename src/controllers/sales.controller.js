const { salesService } = require('../services');
const { mapError } = require('../utils/errorMap');

const getAll = async (req, res) => {
  const responseService = await salesService.getAll();

  return res.status(200).json(responseService);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);

  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
};

const create = async (req, res) => {
  const { body } = req;
  
  const { type, message } = await salesService.create(body);

  if (type) return res.status(mapError(type)).json({ message });
  console.log(message, 'message');
  return res.status(201).json(message);
};

module.exports = {
  getAll,
  findById,
  create,
};