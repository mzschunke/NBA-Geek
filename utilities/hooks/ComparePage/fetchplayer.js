import { useEffect, useState } from "react";

export const usePlayerStats = (selectedPlayer, selectedSeason) => {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        if (!selectedPlayer || !selectedSeason) {
          return;
        }
        const url = `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeason}&player_ids[]=${selectedPlayer}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        const playerStats = data[0];
        setPlayerStats(playerStats);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }
    fetchPlayer();
  }, [selectedPlayer, selectedSeason]);

  return playerStats;
};
