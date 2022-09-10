const getProducts = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' },
];

const getProductsById = [
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];
const getProductsByIdError = [
  {
    name: 'Traje de encolhimento',
  },
];

const createProducts = {
	id: 4,
	name: "Escudo Mulher Maravilha"
} ;

const updateProducts = {
  id: 4,
  name: "Escudo Superman"
};

const deleteProducts = {
  id: 2,
  name: 'Traje de encolhimento'
};

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  getProductsByIdError,
  deleteProducts
}