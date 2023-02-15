const productMock = [{
  id: 1,
  name: "Martelo de Thor"
}, {
  id: 2,
  name: "Traje de encolhimento"
}];

const newProduct = [{
  name: "ProdutoX"
}];

const idMock = [
  { id: 1, name: 'Martelo de Thor' }
];

const invalideNameString = { id: 1, name: 'X' };
const invalideNameNumber = { id: 1, name: 2 };
const valideName = "ProdutoX";
const validateNameNot = "P"

module.exports = {
  productMock,
  newProduct,
  idMock,
  invalideNameString,
  invalideNameNumber,
  valideName,
  validateNameNot,
};