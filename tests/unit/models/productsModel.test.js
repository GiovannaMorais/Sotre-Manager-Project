const sinon = require("sinon");
const { expect } = require("chai");
const productsModel = require("../../../src/models/productsModel");
const connection = require("../../../src/models/connection");

// const messageNotFound = {
//   message: "Product not found",
// };

const {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
} = require("../mocks/getProducts.mock");

describe('Testando camada Model', () => {
  describe("Testando o productsModel", function () {
    afterEach(sinon.restore);
    it('Verificando a function getProductsById', async () => {
      sinon.stub(connection, 'execute').resolves([[getProductsById]]);
      const respons = await productsModel.getProductsById(2);

      expect(respons).to.be.deep.equal(getProductsById);
    });
  
    it('Verificando a função createProducts', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
      const response = await productsModel.createProducts('Escudo Mulher Maravilha');
      expect(response).to.be.deep.equal(createProducts);
    });

    it('Verificando a function getProducts', async () => {
      sinon.stub(connection, 'execute').resolves([getProducts]);
      const result = await productsModel.getProducts();
       expect(result).to.be.an('array');
      expect(result).to.deep.equal(getProducts);
    })

    it('Verificando a function updateProducts', async function () {
    sinon.stub(connection, 'execute');
    sinon.stub(productsModel, 'getProductsById').resolves([{updateProducts}]);
  

    const result = await productsModel.updateProducts(4, "Escudo Superman");

    expect(result).to.deep.equal(updateProducts);
    });
    
    it('Verificando a function deleteProducts', async () => {
    sinon.stub(connection, 'execute');
    sinon.stub(productsModel, 'getProductsById').resolves([]);

    await productsModel.deleteProducts(2);

    const result = await productsModel.getProductsById(2);

    expect(result).to.be.an('array');
  });
  });
});
