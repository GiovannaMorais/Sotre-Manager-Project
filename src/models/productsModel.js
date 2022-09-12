const connection = require('./connection');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};
const getProductsSearch = async () => {
  const query = 'SELECT id,name FROM StoreManager.products ';
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
  const [{ insertId }] = await connection.execute(query, [name]);
  return { id: insertId, name };
};
const updateProducts = async (productId, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
   await connection.execute(query, [name, productId]);
  return { id: productId, name };
};

const deleteProducts = async (productId) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
   await connection.execute(query, [productId]);
  return { id: productId };
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
  getProductsSearch,
};