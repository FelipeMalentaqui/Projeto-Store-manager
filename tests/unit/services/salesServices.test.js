const sinon = require('sinon');
const { expect } = require('chai');

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { sales } = require('./mocks/salesService.mock');

describe('Testando a Sales Service', function () {
  describe('testando GetAll', function () {
    it('Retorna todas as vendas', async function () {
      sinon.stub(salesModel, 'getAll').resolves(sales);

      const result = await salesService.getAll();

      expect(result).to.deep.equal(sales);
    });
  });
});