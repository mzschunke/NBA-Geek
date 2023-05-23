import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Headline } from "@/styles";
import styled from "styled-components";
import StatsDisplay from "@/Components/StatsDisplay";

const URL = "https://www.balldontlie.io/api/v1/players/"

const SelectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 0;
    padding-bottom: 0;
`

export default function Stats() {
    const [selectedPlayer, setSelectedPlayer] = useState(""); 
    const [selectedSeason, setSelectedSeason] = useState(2022); 
    const [playerStats, setPlayerStats] = useState(null);

    const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value)
    };

    const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    fetchPlayer();
    };

    const { data } = useSWR(URL + selectedPlayer);
    const player = data;

    useEffect(() => {
        fetchPlayer();
      }, [selectedPlayer, selectedSeason]);

    async function fetchPlayer() {
        try {
            const response = await fetch(
              `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeason}&player_ids[]=${selectedPlayer}`
            );
            const fetchedData = await response.json();
            const playerStats = fetchedData.data[0];
            setPlayerStats(playerStats);
          } catch (error) {
            console.error("Error fetching player data:", error);
          }
        }

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }

    else if (selectedPlayer === "") {
      return (
          <>
          <Headline>Stats</Headline>
          <StatsSelector selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} selectedSeason={selectedSeason} onSelectSeason={handleSeasonChange}/>
          <p>Nothing selected</p>
          <NavBar />
          </>
      )
  }

  else if (playerStats === undefined) {
    return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} selectedSeason={selectedSeason} onSelectSeason={handleSeasonChange}/>
        <SelectionContainer>
        <h3>Player: {player.last_name}, {player.first_name} </h3>
        <h3>Season: {selectedSeason} - Season Average:</h3>
        </SelectionContainer>
        <p>No data available</p>
        <NavBar />
        </>
    )
}

    else {
        return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} selectedSeason={selectedSeason} onSelectSeason={handleSeasonChange}/>
        <SelectionContainer>
        <h3>Player: {player.last_name}, {player.first_name} </h3>
        <h3>Season: {selectedSeason} - Season Average:</h3>
        </SelectionContainer>
        {playerStats && (
        <StatsDisplay playerStats={playerStats}>
        </StatsDisplay>
        )}
        <NavBar />
        </>
    )
}
}





