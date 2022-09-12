const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productValidation = require('../middlewares/productValidation');

const route = Router();

route.get('/search', productsController.getProductsSearch);
route.get('/', productsController.getProducts);
route.get('/:id', productsController.getProductsById);
route.post('/', productValidation.validateName, productsController.createProducts);
route.put('/:id', productValidation.validateName, productsController.updateProducts);
route.delete('/:id', productsController.deleteProducts);

module.exports = route;