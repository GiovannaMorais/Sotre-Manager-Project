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

module.exports = {
  createSales,
  getSalesById,
  getSales,
};
