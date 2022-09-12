const { Router } = require('express');
const salesController = require('../controllers/salesController');
const salesValidation = require('../middlewares/salesValidation');

const route = Router();

route.post('/',
  salesValidation.ValidationRequired,
  salesValidation.validateId,
  salesController.createSales);
route.get('/', salesController.getSales);
route.get('/:id', salesController.getSalesById);
route.delete('/:id', salesController.deleteSales);
route.put('/:id',
  salesValidation.ValidationRequired,
  salesValidation.validateId,
  salesController.updateSales);

module.exports = route;
