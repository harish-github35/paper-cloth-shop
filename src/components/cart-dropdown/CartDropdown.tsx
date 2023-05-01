import { useNavigate } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { Cart_dropdown_container, Empty_message, Cart_items } from "./styles";

const CartDropdown = () => {
  const { cartItems, dispatch } = useCartContext();
  const navigate = useNavigate();

  return (
    <Cart_dropdown_container>
      {cartItems.length < 1 ? (
        <Empty_message>no items</Empty_message>
      ) : (
        <Cart_items>
          {cartItems.map((c) => (
            <CartItem cartItem={c} key={c.id} />
          ))}
        </Cart_items>
      )}
      <Button
        onClick={() => {
          navigate("/checkout");
          dispatch({ type: "SET_CART_OPEN", payload: false });
        }}
      >
        GO TO CHECKCOUT
      </Button>
    </Cart_dropdown_container>
  );
};

export default CartDropdown;
