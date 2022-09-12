const productsService = require('../services/productsService');

const getProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();
  if (type) return res.status(type).json(message);
  res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const createProducts = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProducts(name);
  if (type) return res.status(type).json({ message });
  res.status(201).json(message);
};
const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProducts(id, name);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProducts(id);
  if (type) return res.status(type).json({ message });
  return res.status(204).json();
};

const getProductsSearch = async (req, res) => {
  const { q } = req.query;
  const productsList = await productsService.getProductsSearch();
  const search = productsList.filter((product) =>
  product.name.toLowerCase().includes(q.toLowerCase()));
  return res.status(200).json(search);
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
  getProductsSearch,
};
