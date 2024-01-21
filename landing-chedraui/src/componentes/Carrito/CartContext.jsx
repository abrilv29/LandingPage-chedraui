import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const getCartDetails = () => {
    return cartItems;
  };

  const clearCart = () => {
    setCartItems([]); // Limpia el carrito estableciendo un array vacío
  };

  const removeItem = (itemId) => {
    removeFromCart(itemId);
  };
  


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartDetails, clearCart,     removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida que children sea de tipo node y requerido
};

export default CartContext;
