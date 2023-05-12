import useSWR from "swr";
import styled from "styled-components";
import { useState } from "react";

const StyledLetterList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    padding-right: 20px;
    background-color: rgb(0, 0 , 0, 0.15)
`

const StyledButton = styled.button`
    color: #0d48a0;
    font-weight: 700;
    border-radius: 20%;
    background-color: #5bc0de;
`

const StyledPlayerList = styled.ul`
    list-style: none; 
    `;

const StyledListItem = styled.li`
align-items: center;
font-size: 0.8rem;
margin-bottom: 0.6rem;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;  
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 3px;
  color: #0d48a0;
  text-shadow: 1px 1px 1px #000000;
  margin-top: 2rem;
  margin-bottom: 0;
`
export default function PlayerOverview() {
    const {data, error, isLoading} = useSWR("/api/players", { fallbackData: [] });
    const [letter, setLetter] = useState("a");
    const filteredPlayers = data.filter((player) => 
         player.last_name.toLowerCase().startsWith(letter));
    if (error) {return <div>failed to load</div>, console.log(error)}
    if (isLoading) {return <div>loading...</div>};
    
    return ( 
        <>
                <Headline>All Players</Headline>
                <StyledLetterList role="list">
                <StyledButton onClick={() => {setLetter("a")}}>A</StyledButton>
                <StyledButton onClick={() => {setLetter("c")}}>C</StyledButton>
                <StyledButton onClick={() => {setLetter("b")}}>B</StyledButton>
                <StyledButton onClick={() => {setLetter("g")}}>G</StyledButton>
                <StyledButton onClick={() => {setLetter("h")}}>H</StyledButton>
                <StyledButton onClick={() => {setLetter("i")}}>I</StyledButton>
                <StyledButton onClick={() => {setLetter("j")}}>J</StyledButton>
                <StyledButton onClick={() => {setLetter("k")}}>K</StyledButton>
                <StyledButton onClick={() => {setLetter("l")}}>L</StyledButton>
                <StyledButton onClick={() => {setLetter("m")}}>M</StyledButton>
                <StyledButton onClick={() => {setLetter("n")}}>N</StyledButton>
                <StyledButton onClick={() => {setLetter("o")}}>O</StyledButton>
                <StyledButton onClick={() => {setLetter("p")}}>P</StyledButton>
                <StyledButton onClick={() => {setLetter("q")}}>Q</StyledButton>
                <StyledButton onClick={() => {setLetter("r")}}>R</StyledButton>
                <StyledButton onClick={() => {setLetter("s")}}>S</StyledButton>
                <StyledButton onClick={() => {setLetter("t")}}>T</StyledButton>
                <StyledButton onClick={() => {setLetter("u")}}>U</StyledButton>
                <StyledButton onClick={() => {setLetter("v")}}>V</StyledButton>
                <StyledButton onClick={() => {setLetter("w")}}>W</StyledButton>
                <StyledButton onClick={() => {setLetter("x")}}>X</StyledButton>
                <StyledButton onClick={() => {setLetter("y")}}>Y</StyledButton>
                <StyledButton onClick={() => {setLetter("z")}}>Z</StyledButton>
                </StyledLetterList>
                <StyledPlayerList role="list">
                {letter.toUpperCase()}
            {filteredPlayers.map((player) => (
                <StyledListItem key={player.id}>
                    {player.last_name}{", "} {player.first_name}
                </StyledListItem>
            ))}
            </StyledPlayerList>
            </>
    );
}
