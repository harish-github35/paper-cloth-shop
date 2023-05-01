import { ReactComponent as LogoSVG } from "../../assets/crown.svg";
import { useAppSelector } from "../../redux/useRedux";
import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import {
  LogoContainer,
  Nav,
  NavLinkItem,
  NavLinksContainer,
  NavLogOut,
} from "./styles";

const NavBar = () => {
  const currentUser = useAppSelector((s) => s.user.currentUser);
  const isCartOpen = useAppSelector((s) => s.cart.isCartOpen);

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <Nav>
      <LogoContainer to="/">
        <LogoSVG />
      </LogoContainer>
      <NavLinksContainer>
        <NavLinkItem to="/shop">SHOP</NavLinkItem>
        {currentUser ? (
          <NavLogOut onClick={handleSignOut}>SIGN OUT</NavLogOut>
        ) : (
          <NavLinkItem to="/auth">SIGN IN</NavLinkItem>
        )}
        <CartIcon />
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
    </Nav>
  );
};

export default NavBar;
