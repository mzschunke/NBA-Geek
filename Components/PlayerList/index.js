import useSWR from "swr";
import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledLetterList = styled.div`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    padding-right: 20px;
    background-color: rgb(0, 0 , 0, 0.15);
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
  text-align: center;
  letter-spacing: 3px;
  color: #0d48a0;
  text-shadow: 1px 1px 1px #000000;
  margin-top: 2rem;  margin-bottom: 0;
`
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

export default function PlayerOverview() {
    const {data, error, isLoading} = useSWR("/api/players", { fallbackData: [] });
    const [letter, setLetter] = useState("a");
    let filteredPlayers = [];
    if (data) {
      filteredPlayers = data
        .filter((player) => player.last_name.toLowerCase().startsWith(letter))
        .sort((a, b) => {
            const lastComparison = a.last_name.localeCompare(b.last_name);
            if (lastComparison !== 0) {
              return lastComparison;
            }
            return a.first_name.localeCompare(b.first_name);
          });
      }
    if (error) {return <div>failed to load</div>, console.log(error)};
    if (isLoading) {return <div>loading...</div>};
    return ( 
        <>
        <Headline>All Players</Headline>
        <StyledLetterList role="list">
         {alphabet.map((letter) => (
                <StyledButton key={letter} onClick={() => {setLetter(letter);}}>
                {letter.toUpperCase()}
                </StyledButton>
               ))}
        </StyledLetterList>
                <StyledPlayerList role="list">
                {letter.toUpperCase()}
            {filteredPlayers.map((player) => (
                <Link href={`/players/${player.id}`} key={player.id}>
                <StyledListItem key={player.id}>
                    {player.last_name}{", "} {player.first_name}
                </StyledListItem>
                </Link>
            ))}
          </StyledPlayerList>
        </>
    );
}
