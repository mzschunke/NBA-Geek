import { useEffect, useState } from "react";

export const usePlayerTwoStats = (selectedPlayerTwo, selectedSeasonTwo) => {
  const [playerTwoStats, setPlayerTwoStats] = useState(null);

  useEffect(() => {
    async function fetchPlayerTwo() {
      try {
        if (!selectedPlayerTwo || !selectedSeasonTwo) {
          return;
        }
        const url = `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeasonTwo}&player_ids[]=${selectedPlayerTwo}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        const playerTwoStats = data[0];
        setPlayerTwoStats(playerTwoStats);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }
    fetchPlayerTwo();
  }, [selectedPlayerTwo, selectedSeasonTwo]);

  return playerTwoStats;
};
