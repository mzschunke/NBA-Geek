import useSWR from "swr";
import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const StyledLetterList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    background-color: rgb(0, 0 , 0, 0.15);
    gap: 2%;
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
  margin-top: 2rem;  
  margin-bottom: 0;
`
const Input = styled.input`
  margin: 1rem;
  border-radius: 2px;
  border-style: double;
`

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: #0d48a0;
  margin-bottom: 0;
  padding-left: 5%;
`

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

export default function PlayerOverview() {
    const {data, error, isLoading} = useSWR("/api/players", { fallbackData: [] });
    const [letter, setLetter] = useState("a");
    let sortedPlayers = [];
    if (data) {
      sortedPlayers = data
        .filter((player) => player.last_name.toLowerCase().startsWith(letter))
        .sort((a, b) => {
            const lastComparison = a.last_name.localeCompare(b.last_name);
            if (lastComparison !== 0) {
              return lastComparison;
            }
            return a.first_name.localeCompare(b.first_name);
          });
      }
    // SearchBox Function: 
    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }; 
    const filteredPlayers = data.filter(
      (player) =>
        player.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.first_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
    if (error) {return <div>failed to load</div>, console.log(error)};
    if (isLoading) {return <div>loading...</div>};
    
    // Render normal player overview if no search term is entered yet
    if (searchQuery === "")
    return ( 
        <>
        <Headline>All Players</Headline>
        <Input value={searchQuery} onChange={handleInputChange} type="search" id="player-search" placeholder="Search..."/>
        <StyledButton type="button" onClick={() => setLetter(letter)}>Reset</StyledButton>
        <StyledLetterList role="list">
         {alphabet.map((letter) => (
                <StyledButton key={letter} onClick={() => setLetter(letter)}>
                {letter.toUpperCase()}
                </StyledButton>
               ))}
        </StyledLetterList>
                <StyledPlayerList role="list">
                {letter.toUpperCase()}
            {sortedPlayers.map((player) => (
                <Link href={`/players/${player.id}`} key={player.id}>
                <StyledListItem key={player.id}>
                    {player.last_name}{", "} {player.first_name}
                </StyledListItem>
                </Link>
            ))}
          </StyledPlayerList>
        </>
    );
    // render search results according to user input 
    else return (
      <>
        <Headline>Player Search</Headline>
        <Input value={searchQuery} onChange={handleInputChange} type="search" id="player-search" placeholder="Search..."/>
        <StyledButton type="button" onClick={() => {setSearchQuery("")}}>Reset</StyledButton>
        <StyledLetterList role="list">
         {alphabet.map((letter) => (
                <StyledButton key={letter} onClick={() => {setLetter(letter); setSearchQuery("")}}>
                {letter.toUpperCase()}
                </StyledButton>
               ))}
        </StyledLetterList>
        {filteredPlayers.length > 0 ? (
        <>
        {searchQuery && (<StyledParagraph>{filteredPlayers.length} players found</StyledParagraph>)}
        {filteredPlayers.map((player) => (
            <StyledPlayerList>
            <Link href={`/players/${player.id}`} key={player.id}>
            <StyledListItem key={player.id}>
            {player.last_name}, {player.first_name}
            </StyledListItem>  
            </Link>
        </StyledPlayerList>
        ))}
        </>
        ) : (
        <>
        <StyledParagraph>No players match your search criteria</StyledParagraph>
        <Image src="/images/court.png" width={400} height={400} style={{objectFit: "contain"}} alt="empty court..."/>
        </>)}           
        </>
    )
}


