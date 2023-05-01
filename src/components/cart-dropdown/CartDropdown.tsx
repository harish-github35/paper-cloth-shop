import { useNavigate } from "react-router-dom";
import { setisCartOpen } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { Cart_dropdown_container, Cart_items, Empty_message } from "./styles";

const CartDropdown = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.cart.cartItems);

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
          dispatch(setisCartOpen());
        }}
      >
        GO TO CHECKCOUT
      </Button>
    </Cart_dropdown_container>
  );
};

export default CartDropdown;
