import styled from "styled-components";

export const StatsContainer = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const StatsBox = styled.table`
  border: 1px solid black;
  background-color: #b6d3d6;
  font-size: 0.8rem;
  box-shadow: 1px 1px 2px;
  border-radius: 5px;
`;

export const StatsList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.4rem;
  padding-left: 1.5rem;
  margin: 24px;
  display: grid;
  border: 0.1px solid white;
  width: 375px;
`;

export const SingleGame = styled.li`
  margin-bottom: 0.6rem;
  margin-top: 0.6rem;
  font-size: 1rem;
  list-style: none;
`;

export const StyledDate = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: left;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #0d48a0;
`;

export const SelectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
