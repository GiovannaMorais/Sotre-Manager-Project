const sinon = require("sinon");
const { expect } = require("chai");
const salesModel = require("../../../src/models/salesModel");
const connection = require("../../../src/models/connection");

const messageNotFound = {
  message: "Product not found",
};

const {
  createSales,
  getSales,
  getSalesById,
} = require("../mocks/getSales.mocks");

describe('Testando camada Model', () => {
  describe("Testando o salesModel", function () {
    afterEach(sinon.restore);
    it('Verificando a function getSalesById', async () => {
      sinon.stub(connection, 'execute').resolves([getSalesById]);
      const response = await salesModel.getSalesById(1);

      expect(response).to.be.deep.equal(getSalesById);
    });
  
    // it('Verificando a função accesSale', async () => {
    //   sinon.stub(connection, 'execute').resolves([createSales]);
    //   const response = await salesModel.accesSale(createSales);
    //   expect(response).to.be.deep.equal(createSales);
    // });

    it('Verificando a function getSales', async () => {
      sinon.stub(connection, 'execute').resolves([getSales]);
      const result = await salesModel.getSales();
       expect(result).to.be.an('array');
      expect(result).to.deep.equal(getSales);
    })

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
