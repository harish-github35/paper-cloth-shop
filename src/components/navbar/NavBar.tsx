import { useLocation } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../../assets/crown.svg";
import { useAppSelector } from "../../redux/useRedux";
import { persistor } from "../../store";
import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import {
  LogoContainer,
  Nav,
  NavLinkItem,
  NavLinkUser,
  NavLinksContainer,
  NavLogOut,
  User_icon,
} from "./styles";

const NavBar = () => {
  const currentUser = useAppSelector((s) => s.user.currentUser);
  const isCartOpen = useAppSelector((s) => s.cart.isCartOpen);
  const location = useLocation();

  const handleSignOut = async () => {
    await signOutUser();
    persistor.purge();
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
          <NavLinkItem to="/auth" state={{ next: location.pathname }}>
            SIGN IN
          </NavLinkItem>
        )}
        <CartIcon />
        {currentUser && (
          <NavLinkUser to={`/user/${currentUser.uid}`}>
            <User_icon />
            <span>{currentUser.displayName}</span>
          </NavLinkUser>
        )}
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
    </Nav>
  );
};

export default NavBar;
