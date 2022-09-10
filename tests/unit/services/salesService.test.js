const sinon = require("sinon");
const { expect } = require("chai");
const salesModel = require("../../../src/models/salesModel");
const salesService = require("../../../src/services/salesService");
const connection = require("../../../src/models/connection");

const messageNotFound = {
  message: "Product not found",
};

const {
  createSales,
  getSales,
  getSalesById,
} = require("../mocks/getSales.mocks");

describe('Testando camada Service', () => {
  describe("Testando o salesService", function () {
    afterEach(sinon.restore);
    it('Verificando a function getSalesById', async () => {
      sinon.stub(connection, 'execute').resolves([getSalesById]);
      const response = await salesService.getSalesById(1);
      expect(response.type).to.equal(null);
      expect(response.message).to.equal(getSalesById);
    });
  
    // it('Verificando a função accesSale', async () => {
    //   sinon.stub(connection, 'execute').resolves([createSales]);
    //   const response = await salesService.createSales(createSales);
    //   expect(response.type).to.equal(null);
    //   expect(response.message).to.equal(createSales);
    // });

    // it('Verificando a function getSales', async () => {
    //   sinon.stub(connection, 'execute').resolves([getSales]);
    //   const result = await salesService.getSales();
    //   expect(result.type).to.equal(null);
    //   expect(result.message).to.equal( {id, itemsSold: getSales});
    // })

    // it('Verificando a function updateProducts', async function () {
    // sinon.stub(connection, 'execute');
    // sinon.stub(salesModel, 'getProductsById').resolves([{updateProducts}]);
  

    // const result = await salesModel.updateProducts(4, "Escudo Superman");

    // expect(result).to.deep.equal(updateProducts);
    // });
    
  //   it('Verificando a function deleteProducts', async () => {
  //   sinon.stub(connection, 'execute');
  //   sinon.stub(salesModel, 'getProductsById').resolves([]);

  //   await salesModel.deleteProducts(2);

  //   const result = await salesModel.getProductsById(2);

  //   expect(result).to.be.an('array');
  // });
  });
});
