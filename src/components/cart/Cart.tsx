import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const context = useContext(CartContext);

  if (!context) return null;

  const { cart, removeFromCart, totalItems, totalPrice } = context;

  if (cart.length === 0) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-gray-500">Your cart is empty.</p>
        <Link
          to="/"
          className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
      </h1>

      <ul className="flex flex-col divide-y">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center gap-4 py-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{item.name}</p>
              <p className="text-sm text-gray-500 mt-0.5">
                ${item.price} × {item.cartQuantity}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <p className="font-semibold text-gray-900">
                ${item.price * item.cartQuantity}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t pt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold text-gray-900">${totalPrice}</p>
        </div>
        <Button size="lg">Checkout</Button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
