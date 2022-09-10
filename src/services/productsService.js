const productsModel = require('../models/productsModel');

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return { type: null, message: products };
};

const getProductsById = async (id) => {
  const products = await productsModel.getProductsById(id);
  if (!products) return { type: 404, message: 'Product not found' };
  return { type: null, message: products };
};

const createProducts = async (productId, quantity) => {
  const products = await productsModel.createProducts(productId, quantity);
  return { type: null, message: products };
};

const ExistsId = async (id) => {
  const products = await productsModel.getProductsById(id);
  if (!products) return 'Product not found';
};

const updateProducts = async (productId, name) => {
  const verifyId = await productsModel.getProductsById(productId);
  const products = await productsModel.updateProducts(productId, name);
  if (!verifyId) return { type: 404, message: 'Product not found' };
  return { type: null, message: products };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  ExistsId,
  updateProducts,
};
