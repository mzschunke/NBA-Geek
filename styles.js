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

export const PlayerName = styled.div`
  background-color: #cee0ed;
  border: 0.5px solid white;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px;
  margin-left: 1rem;
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

export const SelectionContainer = styled.section`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0 5px 5px 10px;
  border: 0.1px solid white;
`;

export const SubHeadline = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 1rem;
  text-align: center;
  color: #cee0ed;
  text-shadow: 2px 2px 2px #000000;
  margin-bottom: 0;
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
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const GamesList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.5rem;
  display: grid;
  border: 0.1px solid white;
`;

// Player Stats Stylings:

export const StatsBox = styled.table`
  border: 1px solid black;
  background-color: #b6d3d6;
  font-size: 0.8rem;
  box-shadow: 1px 1px 2px;
  border-radius: 5px;
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
  padding: 0.6rem;
  margin: 24px;
  display: grid;
  justify-content: center;
  border: 0.1px solid white;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0d48a0;
`;

// Player List stylings:

export const StyledLetterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(0, 0, 0, 0.15);
  gap: 0.8%;
  margin-top: 0.3rem;
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
  padding: 1.5rem;
  margin-left: 0.7rem;
  margin-right: 1 rem;
  gap: 0.7rem;
  justify-content: center;
`;

export const PlayerNameBio = styled.h1`
  font-size: 2rem;
  color: #0d48a0;
  text-shadow: 1px 1px 0;
  margin-right: 0.3rem;
`;

export const PlayerDetails = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5;
`;

export const StyledDescriptionList = styled.dl`
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  background-color: rgb(39, 100, 176, 0.5);
  padding: 8px;
  border-radius: 10px;
  border: 0.1px solid white;
  margin: 5px;
`;

export const StyledTerm = styled.dt`
  font-weight: 700;
`;

export const StyledDefinition = styled.dd`
  font-style: oblique;
`;
