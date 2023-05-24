import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import { Headline } from "@/styles";
import styled from "styled-components";
import StatsDisplay from "@/Components/StatsDisplay";

const SelectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.6rem;
  padding: 1rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export default function Stats() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedSeason, setSelectedSeason] = useState(2022);
  const [playerStats, setPlayerStats] = useState(null);
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState("");
  const [selectedSeasonTwo, setSelectedSeasonTwo] = useState(2022);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);

  const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const handlePlayerTwoChange = (event) => {
    setSelectedPlayerTwo(event.target.value);
  };

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  const handleSeasonTwoChange = (event) => {
    setSelectedSeasonTwo(event.target.value);
  };

  useEffect(() => {
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

    fetchPlayer();
  }, [selectedPlayer, selectedSeason]);

  useEffect(() => {
    async function fetchPlayerTwo() {
      try {
        const response = await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeasonTwo}&player_ids[]=${selectedPlayerTwo}`
        );
        const fetchedData = await response.json();
        const playerTwoStats = fetchedData.data[0];
        setPlayerTwoStats(playerTwoStats);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }

    fetchPlayerTwo();
  }, [selectedPlayerTwo, selectedSeasonTwo]);

  return (
    <>
      <Headline>Stats</Headline>
      <StatsSelector
        selectedPlayer={selectedPlayer}
        onSelectPlayer={handlePlayerChange}
        selectedPlayerTwo={selectedPlayerTwo}
        onSelectPlayerTwo={handlePlayerTwoChange}
        selectedSeason={selectedSeason}
        onSelectSeason={handleSeasonChange}
        selectedSeasonTwo={selectedSeasonTwo}
        onSelectSeasonTwo={handleSeasonTwoChange}
      />
      <SelectionContainer>
        {(playerStats || playerTwoStats) && (
          <StatsDisplay
            playerStats={playerStats}
            playerTwoStats={playerTwoStats}
            selectedPlayer={selectedPlayer}
            selectedPlayerTwo={selectedPlayerTwo}
            selectedSeason={selectedSeason}
            selectedSeasonTwo={selectedSeasonTwo}
          ></StatsDisplay>
        )}
      </SelectionContainer>
      <NavBar />
    </>
  );
}
