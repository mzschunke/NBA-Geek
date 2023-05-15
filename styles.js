import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "roboto", sans-serif; 
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  height: 30%;
`;



