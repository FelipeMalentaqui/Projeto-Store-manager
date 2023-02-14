const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');

const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');

const { productMock, invalideNameString, invalideNameNumber, valideName } = require('./mocks/ProductsService.mock');

describe('Testando a Service de Products', function () {
  describe('testando GetAll', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Retorna todos os produtos', async function () {
      sinon.stub(productsModel, 'getAll').resolves(productMock);

      const result = await productsService.getAll();

      expect(result).to.deep.equal(productMock)
    });
  });

  describe('Testando findById', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Retorna um erro se passado um id invalido', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);

      const result = await productsService.findById(10);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });

    it('Retorna o produto com o id informado', async function() {
      sinon.stub(productsModel, 'findById').resolves(productMock[0]);

      const result = await productsService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(productMock[0]);
    });
  });

  describe('Testando create', function () {});
    describe('Retorna o produto criado', function () {
      afterEach(() => {
        sinon.restore();
      });
      it('Retorna o erro quando é passado um nome com 3 caractere', async function () {
        // sinon.stub(productsModel, 'create').resolves(valideName);

        const result = await productsService.create(invalideNameString);

        expect(result.type).to.equal('INVALID_NAME');
        expect(result.message).to.equal('"name" length must be at least 5 characters long');
      });
       afterEach(() => {
         sinon.restore();
       });

      it('Retorna o erro quando não é passado um numero no nome do produto', async function () {
        // sinon.stub(productsModel, 'create').resolves(valideName);

        const result = await productsService.create(invalideNameNumber);

        expect(result.type).to.equal('INVALID_NAME');
        expect(result.message).to.equal('"name" must be a string');
      });

       afterEach(() => {
         sinon.restore();
       });

      // it('Retorna o produto criado', async function () {
      //   sinon.stub(productsModel, 'create').resolves(valideName);

      //   const result = await productsService.create(1);

      //   expect(result.type).to.equal(null);
      //   expect(result.message).to.equal(productMock[0]);
      // });
    });
  
  describe('', function () {

  });

});