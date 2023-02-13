const { validateNameProductSchema } = require('./schema');

const validateNameProduct = (name) => {
  const { error } = validateNameProductSchema.validate(name);

  if (error) return { type: 'INVALID_NAME', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateNameProduct,
};
