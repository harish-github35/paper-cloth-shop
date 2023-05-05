import { setisCartOpen } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { cartItemQuantitySelector } from "../../utils/selector";
import { Cart_icon_container, Item_count, Shopping_icon } from "./styles";

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(cartItemQuantitySelector);

  const toggleOpen = () => dispatch(setisCartOpen());

  return (
    <Cart_icon_container onClick={toggleOpen}>
      <Shopping_icon />
      <Item_count>{cartCount}</Item_count>
    </Cart_icon_container>
  );
};

export default CartIcon;
