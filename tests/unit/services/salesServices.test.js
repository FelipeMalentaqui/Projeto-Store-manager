const sinon = require('sinon');
const { expect } = require('chai');

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { sales, saleId } = require('./mocks/salesService.mock');

describe('Testando a Sales Service', function () {
  describe('testando GetAll', function () {
    afterEach(() => {
      sinon.restore();
    });

    
    it('Retorna todas as vendas', async function () {
      sinon.stub(salesModel, 'getAll').resolves(sales);

      const result = await salesService.getAll();

      expect(result).to.deep.equal(sales);
    });
  });

  describe('Testando findById', function () {
    afterEach(() => {
      sinon.restore();
    });

     it('Retorna um erro se passado um id invalido', async function () {
       sinon.stub(salesModel, 'findById').resolves([]);

       const result = await salesService.findById(10);

       expect(result.type).to.equal('SALE_NOT_FOUND');
       expect(result.message).to.equal('Sale not found');
     });

    it('Devera retornar todos os produtos como id selecionado', async function () {
      sinon.stub(salesModel, 'findById').resolves(saleId);

      const result = await salesService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(saleId);
    });
  });
});