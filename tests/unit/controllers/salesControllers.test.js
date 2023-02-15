const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');

const { sales } = require('./mock/salesController.mock');

describe('Testando camada Controller Sales', function () {
  describe('Testando GetAll', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Devera retornar todos', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'getAll').resolves(sales);

      await salesController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(sales);
    });
  });

  describe('Testando findById', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Devera responder com status 200 e os dados do banco se existir', async function () {
      const res = {};
      const req = {
        params: {
          id: 1
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findById').resolves({
        type: null,
        message: sales
      });

      await salesController.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(sales);
    });

    it('se passado um id  inexistente retorne o erro', async function () {
      const res = {};
      const req = {
        params: {
          id: 'aaa'
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findById').resolves({
        type: 'PRODUCT_NOT_FOUND',
        message: 'Product not found'
      });

      await salesController.findById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: 'Product not found'
      });
    });
  });


});
