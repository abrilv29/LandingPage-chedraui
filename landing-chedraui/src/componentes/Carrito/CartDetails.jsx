import { useCart } from "./CartContext";
import { useState } from "react";

function CartDetails() {
  const { getCartDetails, clearCart,removeItem  } = useCart();
  const cartDetails = getCartDetails();

  const [quantities, setQuantities] = useState(
    Object.fromEntries(cartDetails.map((item) => [item.id, 1]))
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const calculateSubtotal = (item) => {
    return item.price * quantities[item.id];
  };

  const calculateTotal = () => {
    return cartDetails.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
    );
  };

  const handlePlaceOrder = () => {
    clearCart();
    alert('¡Orden de compra realizada con éxito!');
  };

  const handleRemoveItem = (itemId) => {
    // Lógica para eliminar un artículo del carrito
    removeItem(itemId);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Detalles de la Compra</h2>
      <ul>

        {cartDetails.map((item) => (
          <li
            key={item.id}
            className="border-b border-gray-300 py-4 flex items-center space-x-4"
          >
            <img
              className="object-contain h-16 w-16 flex-shrink-0"
              src={item.image || ""}
              alt={item.title || ""}
            />
            <div className="flex-grow">
              <strong className="text-lg">{item.title}</strong>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, quantities[item.id] - 1)
                    }
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span>{quantities[item.id]}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, quantities[item.id] + 1)
                    }
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-lg">${calculateSubtotal(item).toFixed(2)}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-lg font-semibold">
        Total: ${calculateTotal().toFixed(2)}
      </div>
      <button
        onClick={handlePlaceOrder}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Realizar Orden de Compra
      </button>
    </div>
  );
}

export default CartDetails;
