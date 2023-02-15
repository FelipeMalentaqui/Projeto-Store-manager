const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { productMock } = require('./mock/productsController.mock');

describe('Testando camada Controller', function () {
  describe('Testando GetAll', function () {
     afterEach(() => {
       sinon.restore();
     });
    it('Devera retornar todos', async function() {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(productsService, 'getAll').resolves(productMock);

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productMock);
    });
  });

  describe('Testando findById', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('', function () {

    });
  });

  describe('Testando create', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('', function () {

    });
  });

  describe('Testando update', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('', function () {

    });
  });

  describe('Testando destroy', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('', function () {

    });
  });
});
