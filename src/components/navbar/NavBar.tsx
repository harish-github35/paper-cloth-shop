import { ReactComponent as LogoSVG } from "../../assets/crown.svg";
import useAuthContext from "../../hooks/useAuthContext";
import useCartContext from "../../hooks/useCartContext";
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
  const { currentUser } = useAuthContext();
  const { isCartOpen } = useCartContext();

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
