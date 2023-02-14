const Joi = require('joi');

const validateNameProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateProductsSchema = Joi.object({
  productId: Joi.number().min(1).required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
});

module.exports = {
  validateNameProductSchema,
  validateProductsSchema,
};