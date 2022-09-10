const sinon = require("sinon");
const { expect } = require("chai");
const productsService = require("../../../src/services/productsService");
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
  getProductsByIdError,
} = require("../mocks/getProducts.mock");

describe('Testando camada Model', () => {
  describe("Testando o productsService", function () {
    afterEach(sinon.restore);
    it('Verificando a function getProductsById', async () => {
      sinon.stub(connection, 'execute').resolves([[getProductsById]]);

      const response = await productsService.getProductsById(2);
      expect(response.type).to.equal(null);
       expect(response.message).to.equal(getProductsById);
    });
  it('Verificando a function getProductsById', async () => {
      sinon.stub(productsModel, 'getProductsById').resolves(undefined);

      const body = {  };
      const error = await productsService.getProductsById(body);
      expect(error.type).to.equal(404);
       expect(error.message).to.equal('Product not found');
    });
  
    it('Verificando a função createProducts', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
      const response = await productsService.createProducts('Escudo Mulher Maravilha');
      expect(response.type).to.equal(null);
       expect(response.message).to.deep.equal(createProducts);
    });

    it('Verificando a function getProducts', async () => {
      sinon.stub(connection, 'execute').resolves([getProducts]);
      const result = await productsService.getProducts();
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(getProducts);
    })

    it('Verificando a function updateProducts', async function () {
    sinon.stub(connection, 'execute');
    sinon.stub(productsModel, 'getProductsById').resolves(updateProducts);
  

    const result = await productsService.updateProducts(4,  "Escudo Superman");
      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(updateProducts);
    });
    
    it('Verificando a function deleteProducts', async () => {
    sinon.stub(connection, 'execute');
    sinon.stub(productsModel, 'getProductsById').resolves([]);

    await productsService.deleteProducts(2);

    const result = await productsService.getProductsById(2);

    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal([]);
    });
    
     it('Verificando a function ExistsId', async () => {
    sinon.stub(connection, 'execute');
    sinon.stub(productsModel, 'getProductsById').resolves(undefined);
    const body = {  };
    const error = await productsService.ExistsId(body);
    expect(error).to.deep.equal('Product not found');
     });
    
    it('Verificando a function updateProducts', async () => {
      sinon.stub(productsModel, 'getProductsById').resolves(undefined);

      const error = await productsService.updateProducts(null,"Escudo Superman");
      expect(error.type).to.equal(404);
       expect(error.message).to.equal('Product not found');
    });
  });
});
