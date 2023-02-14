const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');

const { productsModel } = require('../../../src/models');
const { productMock, newProduct } = require('./mock/products.model.mock');

describe('Teste da camada Model Products', function () {
  describe('Testando a GetAll', function () {

     afterEach(() => {
       sinon.restore();
     });
    
    it('Listar todos os produtos', async function () {

      const banco = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" }
      ];

    
      sinon.stub(connection, 'execute').resolves([banco]);

      const responseModel = await productsModel.getAll(productMock);

      expect(responseModel).to.be.deep.equal(productMock);
    });
  });

  describe('Testando a findById', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Lista um unico produto pelo id', async function () {
      const banco = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" }
      ];

      sinon.stub(connection, 'execute').resolves([banco]);

      const id = 1;

      const responseModel = await productsModel.findById(id);

      expect(responseModel).to.be.deep.equal(productMock[0]);
    });
  });

  describe('Testando a create', function () {
     afterEach(() => {
       sinon.restore();
     });
    
    it('Cria um novo produto', async function () {
      
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
      const expected = 1;
      const responseModel = await productsModel.create(newProduct);

      expect(responseModel).to.equal(expected);
    });
  });

  describe('Testando a update', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Altera um produto existente', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      
      const expected = 1;
      const responseModel = await productsModel.update(newProduct);

      expect(responseModel).to.equal(expected);
    });
  });

  describe('Testando a destroy', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('O produto não devera mais existir', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const produtDelete = 6;
      const expected = 1;
      
      const responseModel = await productsModel.destroy(produtDelete);

      expect(responseModel).to.be.equal(expected);
    });
  });

});