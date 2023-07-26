import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import { Headline } from "@/styles";
import StatsDisplay from "@/Components/StatsDisplay";

export default function Stats({ CURRENT_SEASON }) {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedSeason, setSelectedSeason] = useState(2022);
  const [playerStats, setPlayerStats] = useState(null);
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState("");
  const [selectedSeasonTwo, setSelectedSeasonTwo] = useState(2022);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);

  const handlePlayerChange = (selectedOption) => {
    setSelectedPlayer(selectedOption.value);
  };

  const handlePlayerTwoChange = (selectedOption) => {
    setSelectedPlayerTwo(selectedOption.value);
  };

  const handleSeasonChange = (selectedOption) => {
    setSelectedSeason(selectedOption.value);
  };

  const handleSeasonTwoChange = (selectedOption) => {
    setSelectedSeasonTwo(selectedOption.value);
  };

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const url = `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeason}&player_ids[]=${selectedPlayer}`;
        const response = await fetch(url);
        const { data } = await response.json();
        const playerStats = data[0];
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
        const url = `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeasonTwo}&player_ids[]=${selectedPlayerTwo}`;
        const response = await fetch(url);
        const { data } = await response.json();
        const playerTwoStats = data[0];
        setPlayerTwoStats(playerTwoStats);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }

    fetchPlayerTwo();
  }, [selectedPlayerTwo, selectedSeasonTwo]);

  return (
    <>
      <Headline>COMPARE</Headline>
      <StatsSelector
        selectedPlayer={selectedPlayer}
        onSelectPlayer={handlePlayerChange}
        selectedPlayerTwo={selectedPlayerTwo}
        onSelectPlayerTwo={handlePlayerTwoChange}
        selectedSeason={selectedSeason}
        onSelectSeason={handleSeasonChange}
        selectedSeasonTwo={selectedSeasonTwo}
        onSelectSeasonTwo={handleSeasonTwoChange}
        CURRENT_SEASON={CURRENT_SEASON}
      />
      <StatsDisplay
        playerStats={playerStats}
        playerTwoStats={playerTwoStats}
        selectedPlayer={selectedPlayer}
        selectedPlayerTwo={selectedPlayerTwo}
        selectedSeason={selectedSeason}
        selectedSeasonTwo={selectedSeasonTwo}
      ></StatsDisplay>
      <NavBar />
    </>
  );
}
