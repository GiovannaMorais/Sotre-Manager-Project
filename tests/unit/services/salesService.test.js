const sinon = require("sinon");
const { expect } = require("chai");
const salesModel = require("../../../src/models/salesModel");
const salesService = require("../../../src/services/salesService");
const connection = require("../../../src/models/connection");

const messageNotFound = {
  message: "Sale not found",
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
  it('Verificando a function deleteSales', async () => {
    sinon.stub(connection, 'execute');
    sinon.stub(salesModel, 'getSalesById').resolves([]);

    await salesService.deleteSales(2);

    const result = await salesService.getSalesById(2);

    expect(result.type).to.equal(404);
    expect(result.message).to.deep.equal(messageNotFound.message);
    });
  });
});
