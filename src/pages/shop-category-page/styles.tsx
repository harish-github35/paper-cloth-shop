import { Link } from "react-router-dom";
import styled from "styled-components";

export const Gotoshoplink = styled(Link)`
  color: green;
  box-shadow: inset 0 -1px green;

  &:hover {
    box-shadow: inset 0 -2px green;
  }

  &:active {
    box-shadow: none;
  }
`;

export const Shopcategorycontainer = styled.main`
  h2 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 28px;
  }
`;
export const Shopcategoryproductsgrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 20px;
  max-width: 1100px;
  margin: 50px auto;

  @media (max-width: 992px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
