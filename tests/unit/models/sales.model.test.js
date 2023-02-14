const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');

const { salesModel } = require('../../../src/models');
const { salesProducts, sales } = require('./mock/sales.model.mock');

describe('Testando a camada Model Sales', function () {
  describe('testando a getAll', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Listar todos', async function () {
      const banco = [
        {
          saleId: 1,
          date: "2021-09-09T04:54:29.000Z",
          productId: 1,
          quantity: 2
        }, {
          saleId: 1,
          date: "2021-09-09T04:54:54.000Z",
          productId: 2,
          quantity: 2
        }
      ]
      sinon.stub(connection, 'execute').resolves([banco]);

      const response = await salesModel.getAll();

      expect(response).to.be.deep.equal(salesProducts);
    });
  });

  describe('testando a getAllSales', function () {
    afterEach(() => {
      sinon.restore();
    });

    it('Listar todos', async function () {
      const banco = [{
          id: 1,
          date: '2023-02-14 20:25:12',
        },
        {
          id: 2,
          date: '2023-02-14 20:25:12',
        }
      ]
       sinon.stub(connection, 'execute').resolves([banco]);

       const response = await salesModel.getAllSales();

       expect(response).to.be.deep.equal(sales);
    });
  });

  // describe('testando a findByid', function () {
  //   afterEach(() => {
  //     sinon.restore();
  //   });

  //   it('Listar apenas com o id inserido', async function () {
  //     const banco = [{
  //         id: 1,
  //         date: '2023-02-14 20:25:12',
  //       },
  //       {
  //         id: 2,
  //         date: '2023-02-14 20:25:12',
  //       }
  //     ]
  //     sinon.stub().resolves(banco[0]);
  //     const id = 1;
  //     const resolves = await salesModel.findById(id);

  //     expect(resolves).to.be.deep.equal(sales[0]);
  //   });
  // });

});