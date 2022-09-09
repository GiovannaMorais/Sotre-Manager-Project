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

module.exports = {
  getProducts,
  getProductsById,
};
