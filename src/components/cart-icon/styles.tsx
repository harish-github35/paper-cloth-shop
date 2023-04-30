import styled from "styled-components";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";

export const Cart_icon_container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Item_count = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
`;

export const Shopping_icon = styled(Cart)`
  width: 24px;
  height: 24px;
`;
