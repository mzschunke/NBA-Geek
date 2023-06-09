import useSWR from "swr";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  StyledButton,
  AlphabetContainer,
  StyledPlayerList,
  StyledPlayerName,
  Input,
  StyledResult,
  StyledAlphabet,
  StyledLetter,
  NoResults,
} from "./Styling";
import { Headline } from "@/styles";
import { Button } from "@mui/material";
import Loader from "../Loader";

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
export default function PlayerOverview() {
  const { data, error, isLoading } = useSWR("/api/players", {
    fallbackData: [],
  });
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
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredPlayers = data.filter(
    (player) =>
      player.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return (<div>failed to load</div>), console.log(error);
  }
  if (isLoading) return <Loader />;

  if (searchQuery === "")
    return (
      <>
        <Headline>ALL PLAYERS</Headline>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          type="search"
          id="player-search"
          placeholder="Search..."
        />
        <Button variant="contained" onClick={() => setLetter(letter)}>
          Reset
        </Button>
        <AlphabetContainer role="list">
          <StyledAlphabet role="list">
            {alphabet.map((letter) => (
              <StyledLetter key={letter}>
                <StyledButton key={letter} onClick={() => setLetter(letter)}>
                  {letter.toUpperCase()}
                </StyledButton>
              </StyledLetter>
            ))}
          </StyledAlphabet>
        </AlphabetContainer>
        <StyledPlayerList role="list">
          {sortedPlayers.map((player) => (
            <Link href={`/players/${player.id}`} key={player.id}>
              <StyledPlayerName key={player.id}>
                {player.last_name}
                {", "} {player.first_name}
              </StyledPlayerName>
            </Link>
          ))}
        </StyledPlayerList>
      </>
    );
  else
    return (
      <>
        <Headline>SEARCH</Headline>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          type="search"
          id="player-search"
          placeholder="Search..."
        />
        <Button variant="contained" onClick={() => setSearchQuery("")}>
          Reset
        </Button>
        <AlphabetContainer role="list">
          <StyledAlphabet role="list">
            {alphabet.map((letter) => (
              <StyledLetter key={letter}>
                <StyledButton key={letter} onClick={() => setLetter(letter)}>
                  {letter.toUpperCase()}
                </StyledButton>
              </StyledLetter>
            ))}
          </StyledAlphabet>
        </AlphabetContainer>
        {filteredPlayers.length ? (
          <>
            {searchQuery && (
              <StyledResult>
                {filteredPlayers.length} players found
              </StyledResult>
            )}
            {filteredPlayers.map((player) => (
              <StyledPlayerList key={player.id}>
                <Link href={`/players/${player.id}`} key={player.id}>
                  <StyledPlayerName key={player.id}>
                    {player.last_name}, {player.first_name}
                  </StyledPlayerName>
                </Link>
              </StyledPlayerList>
            ))}
          </>
        ) : (
          <NoResults>
            <StyledResult>No players match your search criteria</StyledResult>
            <Image
              src="/images/court.png"
              width={375}
              height={280}
              style={{ objectFit: "contain" }}
              alt="empty court..."
            />
          </NoResults>
        )}
      </>
    );
}
