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
  updateSales,
} = require("../mocks/getSales.mocks");

describe("Testando camada Model", () => {
  describe("Testando o salesModel", function () {
    afterEach(sinon.restore);

    it("Verificando a function getSalesById", async () => {
      sinon.stub(connection, "execute").resolves([getSalesById]);
      const response = await salesModel.getSalesById(1);

      expect(response).to.be.deep.equal(getSalesById);
    });
    it("Verificando a function getSales", async () => {
      sinon.stub(connection, "execute").resolves([getSales]);
      const result = await salesModel.getSales();
      expect(result).to.be.an("array");
      expect(result).to.deep.equal(getSales);
    });
        
    it('Verificando a function deleteSales', async () => {
    sinon.stub(connection, 'execute');
    sinon.stub(salesModel, 'getSalesById').resolves([]);

    await salesModel.deleteSales(2);

    const result = await salesModel.getSalesById(2);

    expect(result).to.be.an('array');
    });
  });
});
