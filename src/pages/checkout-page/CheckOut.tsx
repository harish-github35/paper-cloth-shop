import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import useCartContext from "../../hooks/useCartContext";
import { Checkout_container, Checkout_header, Total } from "./styles";

const CheckOut = () => {
  const { total, cartItems, addItemToCart, decreaseItem, removeItem } =
    useCartContext();

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

      {cartItems.map((c) => (
        <CheckoutItem
          key={c.id}
          item={c}
          onRemove={() => removeItem(c)}
          onDecrement={() => decreaseItem(c)}
          onIncrement={() => addItemToCart(c)}
        />
      ))}
      <Total>Total: {total}</Total>
    </Checkout_container>
  );
};

export default CheckOut;
