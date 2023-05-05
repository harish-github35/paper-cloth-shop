import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  /* width: 70px; */
  padding: 25px 0;
`;

export const NavLinksContainer = styled.div`
  justify-self: end;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinkItem = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const NavLinkUser = styled(NavLinkItem)`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const NavLogOut = styled.span`
  padding: 10px 15px;
  cursor: pointer;
`;

export const User_icon = styled(UserIcon)`
  width: 24px;
  height: 24px;
`;
