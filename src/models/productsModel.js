const connection = require('./connection');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getProductsById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[result]] = await connection.execute(query, [id]);

  return result;
};

module.exports = {
  getProducts,
  getProductsById,
};