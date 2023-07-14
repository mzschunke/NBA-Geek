import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.4rem;
`;

export const AlphabetContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.1);
`;

export const StyledAlphabet = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0.5rem 0.5rem 0.6rem;
  gap: 0.1rem;
`;

export const StyledLetter = styled.li`
  font-weight: 700;
`;

export const StyledButton = styled.button`
  font-weight: 700;
  color: rgb(39, 100, 176);
  background-color: #cee0ed;
  width: 26px;
`;

export const StyledPlayerList = styled.ul`
  list-style: none;
  columns: 150px;
  padding: 0 16px 0 16px;
`;

export const StyledPlayerResults = styled.ul`
  list-style: none;
  display: grid;
`;

export const StyledPlayerName = styled.li`
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  color: #0d48a0;
  font-weight: 500;
  padding: 0.4rem;
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  margin: 1rem;
  border-radius: 5px;
  border-style: double;
  height: 2rem;
`;

export const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const StyledResult = styled.p`
  font-size: 1.5rem;
  color: #fff176;
  margin: 1rem 0 0 0;
  padding: 0 5% 2% 5%;
`;

export const NoResults = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledNoResult = styled.p`
  font-size: 1.5rem;
  color: #573a06;
  font-style: oblique;
  margin: 1rem 0 0 0;
  padding: 0 5% 0 5%;
`;
