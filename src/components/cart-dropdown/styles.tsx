import styled from "styled-components";

export const Cart_dropdown_container = styled.div`
  border: 1px solid black;
  background-color: white;
  position: absolute;
  top: 90px;
  right: 40px;
  width: 280px;
  padding: 20px;
  z-index: 5;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 260px auto;
  overflow: hidden;

  button {
    margin: 0;
  }
`;
export const Empty_message = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const Cart_items = styled.div`
  overflow: auto;
  margin-bottom: 10px;
`;
