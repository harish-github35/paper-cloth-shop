import { Link } from "react-router-dom";
import styled from "styled-components";

export const Category_preview_container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    align-items: center;
  }

  .title {
    font-size: 28px;
  }
`;

export const Show_all_link = styled(Link)`
  display: block;
  font-size: 1rem;
  opacity: 0.6;
  box-shadow: 0px 1px 0 black;

  &:hover {
    box-shadow: none;
  }
`;

export const Preview_container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 20px;

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
