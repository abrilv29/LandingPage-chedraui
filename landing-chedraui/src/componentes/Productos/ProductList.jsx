// ProductList.jsx
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductList = ({ productList, filterFunction }) => {
  const filteredProducts = filterFunction ? productList.filter(filterFunction) : productList;

  return (
    <div className="container mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  filterFunction: PropTypes.func,
};

export default ProductList;
