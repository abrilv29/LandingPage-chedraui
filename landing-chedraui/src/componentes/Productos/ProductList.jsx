// ProductList.jsx
import PropTypes from 'prop-types';
import ProductCard from './ProductCard'; // Asegúrate de ajustar la importación según la ubicación real de tu componente ProductCard

const ProductList = ({ productList }) => {
  return (
    <div className="container mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
      }).isRequired,
      // ... otras propiedades del producto
    })
  ).isRequired,
};

export default ProductList;
