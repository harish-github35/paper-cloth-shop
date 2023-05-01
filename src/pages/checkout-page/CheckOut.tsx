import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import useCartContext from "../../hooks/useCartContext";
import { Checkout_container, Checkout_header, Total } from "./styles";

const CheckOut = () => {
  const { total, cartItems, dispatch } = useCartContext();

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
          onRemove={() =>
            dispatch({
              type: "REMOVE_ITEM",
              payload: item.id,
            })
          }
          onDecrement={() =>
            dispatch({
              type: "DECREASE_ITEM",
              payload: item,
            })
          }
          onIncrement={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: item,
            })
          }
        />
      ))}
      <Total>Total: {total}</Total>
    </Checkout_container>
  );
};

export default CheckOut;
