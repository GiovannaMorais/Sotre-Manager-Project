const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const sales = req.body;
  const sale = await salesService.createSales(sales);
  return res.status(201).json(sale);
};

const getSales = async (_req, res) => {
  const { type, message } = await salesService.getSales();
  if (type) return res.status(type).json(message);
  res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSalesById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSales(id);
  if (type) return res.status(type).json({ message });
  return res.status(204).json();
};

const updateSales = async (req, res) => {
  const sales = req.body;
  const ids = req.params;
  const verifyId = await salesService.getSalesById(ids.id);
  
  if (verifyId.type === 404) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  const sale = await salesService.updateSales(sales);
  return res.status(200).json(sale);
};
module.exports = {
  createSales,
  getSalesById,
  getSales,
  deleteSales,
  updateSales,
};
