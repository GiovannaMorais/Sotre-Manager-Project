const express = require('express');

const app = express();
const productsController = require('./controllers/productsController');

app.use(express.json());

app.get('/products', productsController.getProducts);
app.get('/products/:id', productsController.getProductsById);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;