const connection = require('./connection');

const accesSaleDate = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [result] = await connection.execute(query);
  const { insertId } = result;
    return { id: insertId };
};

const accesSale = async ({ saleId, productId, quantity }) => {
  const query = `
      INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?);
    `;
  await connection.execute(query, [saleId, productId, quantity]);

  return { productId, quantity };
};

const getSales = async () => {
  const query = `SELECT sale_id as saleId, date, product_id as productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id
      ORDER BY sale_id, product_id;`;
  const [result] = await connection.execute(query);
  return result;
};

const getSalesById = async (id) => {
  const query = `SELECT date, product_id as productId, quantity 
      FROM StoreManager.sales_products as sp
      JOIN StoreManager.sales as s
      ON sp.sale_id = s.id
      WHERE sp.sale_id = ?
      ORDER BY sale_id, product_id`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getSales,
  accesSaleDate,
  getSalesById,
  accesSale,
};
