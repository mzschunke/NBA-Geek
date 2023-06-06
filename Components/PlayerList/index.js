import useSWR from "swr";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Headline,
  StyledButton,
  StyledLetterList,
  StyledPlayerList,
  StyledListItem,
  Input,
  StyledResult,
} from "@/styles";
import { Button } from "@mui/material";
import PulseLoader from "react-spinners/PulseLoader";

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
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PulseLoader
          color={"rgb(39, 100, 176)"}
          loading={isLoading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

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
        <StyledLetterList role="list">
          {alphabet.map((letter) => (
            <StyledButton key={letter} onClick={() => setLetter(letter)}>
              {letter.toUpperCase()}
            </StyledButton>
          ))}
        </StyledLetterList>
        <StyledPlayerList role="list">
          {sortedPlayers.map((player) => (
            <Link href={`/players/${player.id}`} key={player.id}>
              <StyledListItem key={player.id}>
                {player.last_name}
                {", "} {player.first_name}
              </StyledListItem>
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
        <StyledLetterList role="list">
          {alphabet.map((letter) => (
            <StyledButton key={letter} onClick={() => setLetter(letter)}>
              {letter.toUpperCase()}
            </StyledButton>
          ))}
        </StyledLetterList>
        {filteredPlayers.length ? (
          <>
            {searchQuery && (
              <StyledResult>
                {filteredPlayers.length} players found
              </StyledResult>
            )}
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
            <StyledResult>No players match your search criteria</StyledResult>
            <Image
              src="/images/court.png"
              width={375}
              height={375}
              style={{ objectFit: "contain" }}
              alt="empty court..."
            />
          </>
        )}
      </>
    );
}
