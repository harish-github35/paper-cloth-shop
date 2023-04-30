import { CartItem } from "../../Types";
import { Cart_item_container } from "./styles";

interface Props {
  cartItem: CartItem;
}

const CartItemComponent = ({ cartItem }: Props) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <Cart_item_container>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </Cart_item_container>
  );
};

export default CartItemComponent;
