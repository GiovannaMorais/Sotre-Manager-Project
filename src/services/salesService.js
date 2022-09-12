const salesModel = require('../models/salesModel');
// const productsModel = require('../models/productsModel');

const createSales = async (sale) => {
  const { id } = await salesModel.accesSaleDate();

  const test = await Promise.all(sale.map(({ productId, quantity }) =>
    salesModel.accesSale({ saleId: id, productId, quantity })));
  // return { type: null, message: { id, itemSold: test } };
  return { id, itemsSold: test };
};
const updateSales = async (sale) => {
  const { id } = await salesModel.accesSaleDate();
   await Promise.all(sale.map(({ productId, quantity }) =>
     salesModel.updateSales({ saleId: id, productId, quantity })));
  return { saleId: id, itemsUpdated: sale }; 
};
const getSales = async () => {
  const sales = await salesModel.getSales();
  return { type: null, message: sales };
};

const getSalesById = async (id) => {
  const sales = await salesModel.getSalesById(id);
  if (!sales || sales.length === 0 || sales === []) return { type: 404, message: 'Sale not found' };
  return { type: null, message: sales };
};

const deleteSales = async (id) => {
  const [verifyId] = await salesModel.getSalesById(id);
  if (!verifyId) return { type: 404, message: 'Sale not found' };
  const sales = await salesModel.deleteSales(id);
  return sales;
};

module.exports = {
  getSales,
  createSales,
  getSalesById,
  deleteSales,
  updateSales,
};
