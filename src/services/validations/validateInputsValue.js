const {
  validateNameProductSchema, validateProductsSchema, validateProductsIdSchema,
} = require('./schema');

const validateNameProduct = (name) => {
  const { error } = validateNameProductSchema.validate(name);
  // console.log(error, 'validate');

  if (error) return { type: 'INVALID_NAME', message: error.message };

  return { type: null, message: '' };
};

const validateProducts = (product) => {
  const { error } = validateProductsSchema.validate(product);
  
  if (error) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  
  return { type: null, message: '' };
};

const validateProductsId = (id) => {
  const { error } = validateProductsIdSchema.validate(id);
  console.log(error, 'error validate');

   if (error) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: '' };
};

module.exports = {
  validateNameProduct,
  validateProducts,
   validateProductsId,
};
