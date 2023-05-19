import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    //border: 1px solid black;
  }

  body {
    margin: 0;
    font-family: "roboto", sans-serif; 
    background: rgb(182,211,214);
   background: linear-gradient(90deg, rgba(182,211,214,1) 0%, rgba(39,100,176,1) 100%, rgba(29,162,178,1) 100%, rgba(39,100,176,1) 100%);
  }
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;  
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 3px;
  color: #0d48a0;
  text-shadow: 1px 1px 1px #000000;
  margin-top: 2rem;
  margin-bottom: 0;
`

export const StyledLink = styled.a`
  text-decoration: none;
  height: 30%;
`;

export const StyledButton = styled.button`
    color: #0d48a0;
    font-weight: 700;
    border-radius: 20%;
    background-color: #5bc0de;
`

// Table Styles: 

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #b6d3d6;
  font-size: 0.8rem;
`;

export const TR = styled.tr`
  border: 1px solid black;
`;

export const TH = styled.th`
`;

export const TD = styled.td`
`;

export const THead = styled.thead`
 // custom css goes here
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
 // custom css goes here
`;