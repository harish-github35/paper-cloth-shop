import useCartContext from "../../hooks/useCartContext";
import { Cart_icon_container, Shopping_icon, Item_count } from "./styles";

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useCartContext();

  const toggleOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <Cart_icon_container onClick={toggleOpen}>
      <Shopping_icon />
      <Item_count>{cartCount}</Item_count>
    </Cart_icon_container>
  );
};

export default CartIcon;
