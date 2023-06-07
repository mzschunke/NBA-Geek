import styled from "styled-components";

export const StyledLetterList = styled.div`
  display: flex;
  justify-content: space-between;
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
