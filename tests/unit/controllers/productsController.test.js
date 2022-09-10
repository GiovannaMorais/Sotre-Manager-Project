const sinon = require("sinon");
const { expect } = require("chai");
const productsService = require("../../../src/services/productsService");
const productsModel = require("../../../src/models/productsModel");
const productsController = require("../../../src/controllers/productsController");
const connection = require("../../../src/models/connection");


const messageNotFound = {
  message: "Product not found",
};

const {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  getProductsByIdError,
  deleteProducts
} = require("../mocks/getProducts.mock");

describe("Testando camada Model", () => {
  describe("Testando o productsService", function () {
    afterEach(sinon.restore);
    it("Verificando a function getProducts", async () => {
      sinon
        .stub(productsService, "getProducts")
        .resolves({ type: null, message: getProducts });
      
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProducts(req, res);

      expect(res.json.calledWith(getProducts)).to.be.true;
    });
     it("Verificando a function getProductsById", async () => {
      sinon
        .stub(productsService, "getProductsById")
        .resolves({ type: null, message: getProductsById });
      
      const res = {};
      const req = {};
      req.params = { id: 2 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductsById(req, res);

      expect(res.json.calledWith(getProductsById)).to.be.true;
     });
    
    it("Verificando a function createProducts", async () => {
      sinon
        .stub(productsService, "createProducts")
        .resolves({ type: null, message: createProducts });
      
      const res = {};
      const req = {
        body: {
          ...createProducts
        }};
      req.params = { id: 2 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.createProducts(req, res);

      expect(res.json.calledWith(createProducts)).to.be.true;
      expect(res.status.calledOnceWith(201)).to.be.true;
    });

    it("Verificando a function updateProducts", async () => {
      sinon
        .stub(productsService, "updateProducts")
        .resolves({ type: null, message: updateProducts });
      
      const res = {};
      const req = {
        body: {
          ...updateProducts
        }};
      req.params = { id: 2 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.updateProducts(req, res);

      expect(res.json.calledWith(updateProducts)).to.be.true;
      expect(res.status.calledOnceWith(200)).to.be.true;
    });

    // it("Verificando a function deleteProducts", async () => {
    //   sinon
    //     .stub(productsService, "getProductsById")
    //     .returns([{message:messageNotFound }]);
      
    //   const res = {};
    //   const req = {};
    //   req.params = { id: 300000 };
    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();

    //   await productsController.deleteProducts(req, res);

    //   expect(res.json.calledWith(messageNotFound)).to.be.false;
    //   expect(res.status.calledOnceWith(404)).to.be.true;
    // });

    it("Verificando a function deleteProducts", async () => {
      sinon
        .stub(productsService, "deleteProducts")
        .resolves({ type: 204});
      
      const res = {};
      const req = {};
      req.params = { id: 2 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.deleteProducts(req, res);

      // expect(res.json.calledWith(messageNotFound)).to.be.true;
      expect(res.status.calledOnceWith(204)).to.be.true;
    });
  });
});
