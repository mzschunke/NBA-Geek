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
  padding: 0.5rem;
  margin-bottom: 0.6rem;
  margin-top: 0.6rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDate = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  font-weight: 00;
  text-align: left;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Score = styled.span`
  margin: 0 0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;
