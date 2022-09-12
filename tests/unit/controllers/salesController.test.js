const sinon = require("sinon");
const { expect } = require("chai");
const salesModel = require("../../../src/models/salesModel");
const salesService = require("../../../src/services/salesService");
const salesController = require("../../../src/controllers/salesController");
const connection = require("../../../src/models/connection");


const messageNotFound = {
  message: "Product not found",
};

const {
  createSales,
  getSales,
  getSalesById,
} = require("../mocks/getSales.mocks");

describe("Testando camada Controller", () => {
  describe("Testando o salesController", function () {
    afterEach(sinon.restore);
    it("Verificando a function getSales", async () => {
      sinon
        .stub(salesService, "getSales")
        .resolves({ type: null, message: getSales });
      
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSales(req, res);

      expect(res.json.calledWith(getSales)).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true;
    });
     it("Verificando a function getSalesById", async () => {
      sinon
        .stub(salesService, "getSalesById")
        .resolves({ type: null, message: getSalesById });
      
      const res = {};
      const req = {};
      req.params = { id: 2 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.getSalesById(req, res);

       expect(res.json.calledWith(getSalesById)).to.be.true;
       expect(res.status.calledOnceWith(200)).to.be.true;
     });
    
    it("Verificando a function createSales", async () => {
      sinon
        .stub(salesService, "createSales")
        .resolves({ type: null, message: createSales });
      
      const res = {};
      const req = {
        body: {
          ...createSales
        }};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await salesController.createSales(req, res);

      expect(res.status.calledOnceWith(201)).to.be.true;
      
    });

    it('Verificando a function updateSales', async () => {
      sinon
        .stub(salesService, "updateSales")
        .resolves({ type: 404, message: 'Sale not found' });
      const res = {};
      const req = {};
      req.params = { id: 999 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.updateSales(req, res);
      expect(res.status.calledWith(404)).to.be.equal(true)
    });
  it('Verificando a function deleteSales', async () => {
      sinon
        .stub(salesService, "deleteSales")
        .resolves({ type: 204});
      const res = {};
      const req = {};
      req.params = { id: 2 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.deleteSales(req, res);
      expect(res.status.calledWith(204)).to.be.equal(true)
    });

  });
});
