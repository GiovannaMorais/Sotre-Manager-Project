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

const createProducts = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  const newProduct = { id: result.insertId, name };
  return newProduct;
};
const updateProducts = async (productId, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
   await connection.execute(query, [name, productId]);
  return { id: productId, name };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
};