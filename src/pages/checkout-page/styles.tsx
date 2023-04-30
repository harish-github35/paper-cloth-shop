import styled from "styled-components";

export const Checkout_container = styled.main`
  width: 55vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const Checkout_header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  overflow: hidden;
  text-transform: capitalize;
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
