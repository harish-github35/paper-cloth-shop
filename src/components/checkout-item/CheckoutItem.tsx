import { CartItem } from "../../Types";
import { Checkout_item_container } from "./styles";

interface Props {
  item: CartItem;
  onRemove: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CheckoutItem = ({ item, onRemove, onDecrement, onIncrement }: Props) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <Checkout_item_container>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={onDecrement} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={onIncrement} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={onRemove} className="remove-button">
        &#10005;
      </div>
    </Checkout_item_container>
  );
};

export default CheckoutItem;
