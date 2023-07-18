import styled from "styled-components";

export const SelectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const StatsContainer = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const StatsList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.1’rem;
  padding-left: 1.5rem;
  margin: 24px;
  display: grid;
  border: 0.1px solid white;
  width: 375px;
`;

export const SingleGame = styled.li`
  margin-bottom: 0.6rem;
  font-size: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  align-items: center;
`;

export const StyledDate = styled.p`
  margin-top: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: left;
`;

export const TeamContainer = styled.div`
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.1rem;
`;

export const Score = styled.span`
  font-weight: bold;
  font-style: oblique;
  padding: 0 0 0.2rem 0.2rem;
  margin-right: 2.7rem;
`;

export const StatsBox = styled.table`
  border: 1px solid black;
  background-color: #b6d3d6;
  font-size: 0.8rem;
  box-shadow: 1px 1px 2px;
  border-radius: 5px;
`;

export const DNP = styled.div`
  width: 3.2rem;
  border: 1px solid black;
  background-color: orange;
  font-size: 1.1rem;
  box-shadow: 1px 1px 2px;
  border-radius: 4px;
  padding: 0.3rem;
  margin-right: 0.5rem;
  font-style: oblique;
  justify-content: flex-end;
`;
