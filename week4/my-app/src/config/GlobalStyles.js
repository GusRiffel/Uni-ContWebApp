import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  font-family:  ${(props) => props.theme.typography.fontFamily}
}

h1 {
  font-size:  ${(props) => props.theme.typography.h1.fontSize} 
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 32px;
}

h4 {
  font-size: 19px;
}

`;

export default GlobalStyles;