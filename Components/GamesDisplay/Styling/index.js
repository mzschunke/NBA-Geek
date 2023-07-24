import styled from "styled-components";

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

export const GamesList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.5rem;
  display: grid;
  border: 0.1px solid white;
`;

export const SingleGame = styled.li`
  margin-bottom: 0.6rem;
  margin-top: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDate = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;
`;

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem;
  font-size: 1.2rem;
  color: ${(props) => (props.id === props.homeTeamId ? "#0d48a0" : "black")};
  font-weight: ${(props) =>
    props.id === props.homeTeamId ? "bold" : "normal"};
`;

export const TeamContainer2 = styled(TeamContainer)`
  color: ${(props) => (props.id === props.visitorTeamId ? "#0d48a0" : "black")};
  font-weight: ${(props) =>
    props.id === props.visitorTeamId ? "bold" : "normal"};
`;

export const Score = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;
