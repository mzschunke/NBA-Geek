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
    background: rgb(39,100,176);
    background: linear-gradient(90deg, rgba(39,100,176,1) 0%, rgba(127,168,199,1) 0%, rgba(69,124,184,1) 100%, rgba(60,117,182,1) 100%, rgba(50,109,179,1) 100%, rgba(71,125,184,1) 100%, rgba(182,211,214,1) 100%, rgba(39,100,176,1) 100%, rgba(29,162,178,1) 100%);
  }
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;  
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 1px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
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
  margin: 2rem;
`;

export const TR = styled.tr`
  border: 3px solid black
`;

export const TH = styled.th`
   border-left: 1px solid black;
   border-bottom: 1px solid black;
`;

export const TD = styled.td`
   border-left: 1px solid black;
   background-color: #cee0ed;
   border-radius: 5%;
   border: 1px solid black;
`;

