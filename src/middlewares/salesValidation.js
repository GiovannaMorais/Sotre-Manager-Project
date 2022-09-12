const joi = require('joi');
const productsService = require('../services/productsService');
const salesService = require('../services/salesService');

const schema = joi.array().items(
  joi.object({
    productId: joi.number().min(1).required().messages({
      'any.required': '400 ,"productId" is required',
    }),
    quantity: joi.number().min(1).required().messages({
      'number.min': '422 ,"quantity" must be greater than or equal to 1',
      'any.required': '400 ,"quantity" is required',
    }),
  }),
);

// const ValidationRequired = (req, res, next) => {
//   const { error } = schema.validate([...req.body]);
//   console.log('error', { error: error.message });
//   if (error.message === '"productId" is required') {
//     return res.status(400).json({ message: '"productId" is required' });
//   }

//   if (error.message === '"quantity" is required') {
//     return res.status(400).json({ message: '"quantity" is required' });
//   }

//   if (error.message === '"quantity" must be greater than or equal to 1') {
//     return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
//   }
//   next();
//  };

const ValidationRequired = (req, res, next) => {
  const { error } = schema.validate([...req.body]);
  if (error) {
    const [status, message] = error.message.split(',');
    return res.status(Number(status)).json({ message });
  }
  next();
};

const validateId = async (req, res, next) => {
  const products = req.body;
  const result = await Promise.all(
    products.map((sale) => productsService.ExistsId(sale.productId)),
  );
  if (result.some((productId) => productId === 'Product not found')) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateId,
  ValidationRequired,
};
