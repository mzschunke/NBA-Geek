import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Select from "react-select";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "roboto", sans-serif; 
    background: #5d8ebe;
 }
`;

// Homepage

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-bottom: 0.2px solid #cee0ed;
  background: rgb(39, 100, 176);
  height: 85px;
`;

export const MainHeadline = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: 2.5px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`;

// Global Styled Components:

export const Headline = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const NoData = styled.div`
  width: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.2rem;
  background-color: orange;
  font-size: 0.8rem;
  margin: 1rem;
  align-items: center;
  box-shadow: 1px 1px 2px;
`;

export const StyledSelect = styled(Select)`
  width: 100px;
  height: 40px;
  align-self: center;
  margin-bottom: 10px;
  margin-top: 5px;
`;

// Table Stylings:

export const TR = styled.tr`
  border: 3px solid black;
`;

export const TH = styled.th`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  background-color: #cee0ed;
`;

export const TD = styled.td`
  border-left: 1px solid black;
  background-color: white;
  border-radius: 5%;
  border: 1px solid black;
  height: 1rem;
  font-weight: 500;
  text-align: center;
`;
