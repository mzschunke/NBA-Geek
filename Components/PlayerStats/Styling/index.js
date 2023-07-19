import styled from "styled-components";

export const SelectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const StatsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StatsList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.1rem;
  padding-left: 1.5rem;
  margin: 24px;
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
  position: relative;
`;

export const StyledDate = styled.p`
  margin-top: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: left;
`;

export const TeamContainer = styled.div`
  margin: 0.2rem 0;
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
  margin-right: 5rem;
`;

export const StatsBox = styled.table`
  border: 1px solid black;
  margin: 0.3rem 0;
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
  justify-self: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;
