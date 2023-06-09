import styled from "styled-components";

export const AlphabetContainer = styled.div`
  margin-top: 0.3rem;
  min-height: 1.5rem;
`;

export const StyledAlphabet = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
`;

export const StyledLetter = styled.li`
  color: #cee0ed;
  font-weight: 700;
  background-color: rgb(39, 100, 176);
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
