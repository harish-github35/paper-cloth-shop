import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { addItem, decreaseItem, removeItem } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { cartTotalSelector } from "../../utils/selector";
import { Checkout_container, Checkout_header, Total } from "./styles";

const CheckOut = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(cartTotalSelector);
  const cartItems = useAppSelector((s) => s.cart.cartItems);
  const currentUser = useAppSelector((s) => s.user.currentUser);

  return (
    <Checkout_container>
      <Checkout_header>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </Checkout_header>
      {cartItems.map((item) => (
        <CheckoutItem
          key={item.id}
          item={item}
          onRemove={() => dispatch(removeItem(item.id))}
          onDecrement={() => dispatch(decreaseItem(item.id))}
          onIncrement={() => dispatch(addItem(item))}
        />
      ))}
      <Total>Total: {total}</Total>

      {cartItems.length > 0 && currentUser ? (
        <PaymentForm />
      ) : (
        <div
          style={{
            padding: "50px",
            background: "#fafafa",
            margin: "40px",
            color: "#888",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {cartItems.length > 0 ? <p>Login to pay</p> : <p>cart empty</p>}
        </div>
      )}
    </Checkout_container>
  );
};

export default CheckOut;
