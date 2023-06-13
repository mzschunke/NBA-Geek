import styled from "styled-components";

export const PlayerBox = styled.div`
  justify-content: center;
  min-width: 420px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  margin-left: 0.7rem;
  margin-right: 1 rem;
  gap: 1.2rem;
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
  justify-content: space-around;
  padding: 0.5;
`;

export const StyledDescriptionList = styled.dl`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  background-color: rgb(39, 100, 176, 0.5);
  padding: 8px;
  border-radius: 10px;
  border: 0.1px solid white;
  margin: 10px;
`;

export const StyledTerm = styled.dt`
  font-weight: 700;
`;

export const StyledDefinition = styled.dd`
  font-style: oblique;
`;
