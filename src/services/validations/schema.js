const Joi = require('joi');

const validateNameProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = {
  validateNameProductSchema,
};