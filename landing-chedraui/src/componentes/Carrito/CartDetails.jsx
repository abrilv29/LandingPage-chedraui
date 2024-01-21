import { useCart } from "./CartContext";
import { useState } from "react";


function CartDetails() {
  const { getCartDetails, clearCart, removeItem } = useCart();
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
    alert("¡Orden de compra realizada con éxito!");
  };

  const handleRemoveItem = (itemId) => {
    // Lógica para eliminar un artículo del carrito
    removeItem(itemId);
  };

  return (
    <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-gray-900">Tu Carrito de Compras</h1>
        </div>

        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <ul className="-my-8">
                {cartDetails.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 relative"
                  >
                    <div className="shrink-0">
                      <img
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                          <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                          <p className="mt-1 text-sm text-gray-500">{`Size: ${item.size}`}</p>
                        </div>

                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p className="text-lg font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                            {`$${item.price.toFixed(2)}`}
                          </p>

                          <div className="sm:order-1">
                            <div className="flex items-center justify-center h-8 text-gray-600 space-x-2">
                              <button
                                className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                                onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}
                              >
                                <span className="text-lg font-semibold">-</span>
                              </button>
                              <span className="text-base font-semibold">{quantities[item.id]}</span>
                              <button
                                className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                                onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
                              >
                                <span className="text-lg font-semibold">+</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          className="flex items-center p-2 text-gray-500 hover:text-gray-900 transition-all duration-200 ease-in-out focus:shadow"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">{`$${calculateTotal().toFixed(2)}`}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <span className="text-xs font-normal text-gray-400">$</span>
                  {`${calculateTotal().toFixed(2)}`}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  onClick={handlePlaceOrder}
                >
                  Proceder al Pago
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetails;

