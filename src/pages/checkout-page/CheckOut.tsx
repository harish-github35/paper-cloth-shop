import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { addItem, decreaseItem, removeItem } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { cartTotalSelector } from "../../utils/cart";
import { Checkout_container, Checkout_header, Total } from "./styles";

const CheckOut = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(cartTotalSelector);
  const cartItems = useAppSelector((s) => s.cart.cartItems);

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
    </Checkout_container>
  );
};

export default CheckOut;
