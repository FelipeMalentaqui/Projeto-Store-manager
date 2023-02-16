const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { productMock, idMock, newProduct, name } = require('./mock/productsController.mock');

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

    it('Devera responder com status 200 e os dados do banco se existir', async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(productsService, 'findById').resolves({ type: null, message: idMock });

      await productsController.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(idMock);
    });

    it('se passado um id  inexistente retorne o erro', async function () {
      const res = {};
      const req = {
        params: { id: 'aaa' },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(productsService, 'findById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      await productsController.findById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });

  describe('Testando create', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Devera retornar os dados enviado com sucesso', async function () {
      const res = {};
      const req = {
        body: { name }
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      sinon.stub(productsService, 'create').resolves({ type: null, message: 1 });

      await productsController.create(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({id: 1, name });
    });
  });

  // describe('Testando update', function () {
  //   afterEach(() => {
  //     sinon.restore();
  //   });
  //   it('', function () {

  //   });
  // });

  // describe('Testando destroy', function () {
  //   afterEach(() => {
  //     sinon.restore();
  //   });
  //   it('', function () {

  //   });
  // });
});
