import styled from "styled-components";

export const StatsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BarChartContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: #cee0ed;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px 1px;
`;

export const PlayerName = styled.div`
  background-color: #cee0ed;
  border: 0.5px solid white;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px;
`;

export const StyledTable = styled.table`
  border: 1px solid black;
  font-size: 0.8rem;
  margin: 1rem;
  box-shadow: 1px 1px 2px;
  width: 50%;
  min-width: 330px;
`;
