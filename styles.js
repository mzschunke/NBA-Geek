import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Select from "react-select";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    /* border: 1px solid black; */
  }

  body {
    margin: 0;
    font-family: "roboto", sans-serif; 
    background: #5d8ebe;

 }
`;

export const Headline = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 1rem;
  text-align: center;
  letter-spacing: 2px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  height: 10%;
  align-self: flex-start;
`;

export const StyledTable = styled.table`
  width: 90%;
  border: 1px solid black;
  font-size: 0.8rem;
  margin: 1rem;
  box-shadow: 1px 1px 2px;
`;

export const TR = styled.tr`
  border: 3px solid black;
`;

export const TH = styled.th`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  background-color: rgb(39, 100, 176, 0.3);
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

export const PlayerName = styled.div`
  background-color: #cee0ed;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px;
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

export const SelectionContainer = styled.section`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  padding-left: 1rem;
`;

export const GamesContainer = styled.section`
  border-radius: 10px;
  padding: 1.5rem;
  margin: 0.2rem;
`;

export const StyledSelect = styled(Select)`
  width: 100px;
  height: 40px;
  align-self: center;
`;

export const GamesList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.5rem;
  display: grid;
  justify-content: start;
`;

export const StatsBox = styled.table`
  border: 1px solid black;
  background-color: #b6d3d6;
  font-size: 0.8rem;
  box-shadow: 1px 1px 2px;
`;

export const SingleGame = styled.li`
  margin-bottom: 0.6rem;
  margin-top: 0.6rem;
  font-size: 1rem;
`;

export const StyledDate = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 00;
  text-align: left;
`;

export const StatsList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.4rem;
  margin: 24px;
  display: grid;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 1rem;
  font-weight: 700;
`;

// Player List stylings:

export const StyledLetterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(0, 0, 0, 0.15);
  gap: 0.8%;
`;

export const StyledPlayerList = styled.ul`
  list-style: none;
  columns: 150px;
`;

export const StyledListItem = styled.li`
  align-items: center;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
  color: #0d48a0;
  font-weight: 600;
  padding: 0.4rem;
  gap: 50%;
`;

export const Input = styled.input`
  margin: 1rem;
  border-radius: 5px;
  border-style: double;
`;

export const StyledResult = styled.p`
  font-size: 1.5rem;
  color: #0d48a0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  padding-left: 5%;
`;

export const StyledButton = styled.button`
  color: #cee0ed;
  font-weight: 700;
  background-color: rgb(39, 100, 176);
`;

// Player [id] stylings:

export const PlayerContainer = styled.div`
  display: flex;
  padding-top: 1.5rem;
  margin-left: 0.7rem;
  gap: 2rem;
`;

export const PlayerNameBio = styled.h1`
  font-size: 2rem;
  color: #0d48a0;
  text-shadow: 1px 1px 0;
`;

export const PlayerDetails = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem 1.6rem 0 0.8rem;
  padding-right: 0.8rem;
  text-align: center;
  gap: 0.9rem;
`;

export const StyledDescriptionList = styled.dl`
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  background-color: rgb(39, 100, 176);
  padding: 10px;
  border-radius: 10px;
`;

export const StyledTerm = styled.dt`
  font-weight: 700;
`;

export const StyledDefinition = styled.dd``;
