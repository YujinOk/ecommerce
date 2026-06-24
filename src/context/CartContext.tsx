import { createContext, useState, useEffect, ReactNode } from "react";
import { Item } from "../data/mockData";

export type CartItem = Item & { cartQuantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Item, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Item, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, cartQuantity: c.cartQuantity + quantity } : c
        );
      }
      return [...prev, { ...item, cartQuantity: quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, c) => sum + c.cartQuantity, 0);
  const totalPrice = cart.reduce(
    (sum, c) => sum + c.price * c.cartQuantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
