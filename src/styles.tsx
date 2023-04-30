import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*:not(h1, h2, h3, h4, h5, h6),
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: inherit;
}

html {
  font-family: "Ysabeau", sans-serif;
  font-size: 16px;
  --sub-color: grey;
  --main-color: black;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  padding: 20px 40px;
}

`;
