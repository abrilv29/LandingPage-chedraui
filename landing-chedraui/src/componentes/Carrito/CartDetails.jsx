// CartDetails.jsx
import { useCart } from "./CartContext";

function CartDetails() {
  const { getCartDetails, clearCart } = useCart();
  const cartDetails = getCartDetails();

  const handlePlaceOrder = () => {
    // Aquí puedes implementar la lógica para realizar la orden de compra
    // Puedes enviar la información a un servidor, procesar el pago, etc.
    // Después de realizar la compra, limpiar el carrito
    clearCart();
    alert('¡Orden de compra realizada con éxito!');
  };

  return (
    <div>
      <h2>Detalles de la Compra</h2>
      <ul>
        {cartDetails.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - ${item.price}
            <img
                className="object-contain"
                src={item.image || ""}
                alt={item.title || ""}
              />
          </li>
          
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Realizar Orden de Compra</button>
    </div>
  );
}

export default CartDetails;
