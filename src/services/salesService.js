const salesModel = require('../models/salesModel');
// const productsModel = require('../models/productsModel');

const createSales = async (saleInfo) => {
  const { id } = await salesModel.accesSaleDate();

  const test = await Promise.all(saleInfo.map(({ productId, quantity }) =>
    salesModel.accesSale({ saleId: id, productId, quantity })));
  // return { type: null, message: { id, itemSold: test } };
  return { id, itemsSold: test };
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

module.exports = {
  getSales,
  createSales,
  getSalesById,
};
