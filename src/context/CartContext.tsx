import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { CartItem, Product } from "../Types";
import { addCartItem, decreaseItemsFromCart } from "../utils/cartitems-utils";

interface CartContextType {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  total: number;
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

interface Add {
  type: "ADD_ITEM";
  payload: Product;
}

interface Decrease {
  type: "DECREASE_ITEM";
  payload: CartItem;
}

interface Remove {
  type: "REMOVE_ITEM";
  payload: number;
}

interface SetIsCartOpen {
  type: "SET_CART_OPEN";
  payload: boolean;
}

type CartAction = Add | Decrease | Remove | SetIsCartOpen;

interface State {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initalState = {
  isCartOpen: false,
  cartItems: [] as CartItem[],
};

const cartReducer = (state: State, action: CartAction): State => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      return { ...state, cartItems: addCartItem(state.cartItems, payload) };
    case "DECREASE_ITEM":
      return {
        ...state,
        cartItems: decreaseItemsFromCart(state.cartItems, payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== payload),
      };
    case "SET_CART_OPEN":
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: Props) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [{ isCartOpen, cartItems }, dispatch] = useReducer(
    cartReducer,
    initalState
  );

  const cartCount = cartItems.reduce((a, c) => a + c.quantity, 0);

  const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        cartItems,
        cartCount,
        total,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
