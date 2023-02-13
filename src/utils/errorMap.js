const errorM = {
  PRODUCT_NOT_FOUND: 404,
  INVALID_NAME: 422,
};

const mapError = (err) => errorM[err] || 500;

// console.log(mapError('PRODUCT_NOT_FOUND')); Exemplo de como o mapError funciona
module.exports = {
  errorM,
  mapError,
};