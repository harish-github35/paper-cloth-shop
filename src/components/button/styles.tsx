import styled, { css } from "styled-components";

const Google_btn = css`
  background-color: #4285f4;
  color: white;

  &:not(:disabled):hover {
    background-color: #357ae8;
    border: none;
  }
`;

const Inverted_btn = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:not(:disabled):hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

interface Props {
  buttonType?: "google-sign-in" | "inverted";
}

export const StyledBtn = styled.button<Props>`
  min-width: 165px;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  font-family: inherit;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${(props) => {
    return props.buttonType && props.buttonType === "google-sign-in"
      ? Google_btn
      : props.buttonType === "inverted"
      ? Inverted_btn
      : "";
  }}

  &:disabled {
    background-color: grey;
    color: #000;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
