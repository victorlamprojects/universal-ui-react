import { createGlobalStyle } from "styled-components";
import { FontSize } from "../config/constants";

const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
	font-size: ${FontSize.Text};
	color: ${props => props.theme.text};
	background-color: ${props => props.theme.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
