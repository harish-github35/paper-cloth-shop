import { Dispatch, ReactNode, createContext, useState } from "react";
import { CartItem, Product } from "../Types";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (product: Product) => void;
  cartCount: number;
  removeItem: (item: CartItem) => void;
  decreaseItem: (item: CartItem) => void;
  total: number;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  cartCount: 0,
  total: 0,
  removeItem: () => null,
  decreaseItem: () => null,
});

interface Props {
  children: ReactNode;
}

const addCartItem = (cartItems: CartItem[], product: Product): CartItem[] => {
  const existingItem = cartItems.find((c) => c.id === product.id);

  if (existingItem) {
    return cartItems.map((c) =>
      c.id === product.id
        ? {
            ...c,
            quantity: c.quantity + 1,
          }
        : c
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const decreaseItemsFromCart = (cartItems: CartItem[], item: CartItem) => {
  return cartItems.map((c) =>
    c.id === item.id ? { ...item, quantity: item.quantity - 1 } : c
  );
};

export const CartContextProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (product: Product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const decreaseItem = (item: CartItem) => {
    if (item.quantity > 1) {
      setCartItems(decreaseItemsFromCart(cartItems, item));
    } else {
      removeItem(item);
    }
  };

  const removeItem = (item: CartItem) => {
    setCartItems(cartItems.filter((c) => c.id !== item.id));
  };

  const cartCount = cartItems.reduce((a, c) => a + c.quantity, 0);

  const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        total,
        removeItem,
        decreaseItem,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
