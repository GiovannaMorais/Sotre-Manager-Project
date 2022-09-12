const express = require('express');

const app = express();
const productsController = require('./controllers/productsController');
const productValidation = require('./middlewares/productValidation');
const salesValidation = require('./middlewares/salesValidation');
const salesController = require('./controllers/salesController');

app.use(express.json());
app.get('/products/search', productsController.getProductsSearch);
app.get('/products', productsController.getProducts);
app.get('/products/:id', productsController.getProductsById);
app.post('/products', productValidation.validateName, productsController.createProducts);
app.put('/products/:id', productValidation.validateName, productsController.updateProducts);
app.delete('/products/:id', productsController.deleteProducts);

app.post('/sales',
  salesValidation.ValidationRequired,
  salesValidation.validateId, 
  salesController.createSales);
app.get('/sales', salesController.getSales);
app.get('/sales/:id', salesController.getSalesById);
app.delete('/sales/:id', salesController.deleteSales);
app.put('/sales/:id', salesValidation.ValidationRequired,
  salesValidation.validateId,
  salesController.updateSales);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;