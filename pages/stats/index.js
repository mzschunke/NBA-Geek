import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import { Headline, HeaderContainer } from "@/styles";
import StatsDisplay from "@/Components/StatsDisplay";

export default function Stats({ CURRENT_SEASON }) {
  const [selectedPlayer, setSelectedPlayer] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedPlayer") || "";
    }
    return "";
  });

  const [selectedSeason, setSelectedSeason] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedSeason") || { CURRENT_SEASON };
    }
    return { CURRENT_SEASON };
  });
  const [playerStats, setPlayerStats] = useState(null);
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedPlayerTwo") || "";
    }
    return "";
  });

  const [selectedSeasonTwo, setSelectedSeasonTwo] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedSeasonTwo") || { CURRENT_SEASON };
    }
    return { CURRENT_SEASON };
  });

  const [playerTwoStats, setPlayerTwoStats] = useState(null);

  useEffect(() => {
    const storedSelectedPlayer = localStorage.getItem("selectedPlayer");
    const storedSelectedSeason = localStorage.getItem("selectedSeason");
    const storedSelectedPlayerTwo = localStorage.getItem("selectedPlayerTwo");
    const storedSelectedSeasonTwo = localStorage.getItem("selectedSeasonTwo");

    if (storedSelectedPlayer) {
      setSelectedPlayer(storedSelectedPlayer);
    }

    if (storedSelectedSeason) {
      setSelectedSeason(storedSelectedSeason);
    }

    if (storedSelectedPlayerTwo) {
      setSelectedPlayerTwo(storedSelectedPlayerTwo);
    }

    if (storedSelectedSeasonTwo) {
      setSelectedSeasonTwo(storedSelectedSeasonTwo);
    }
  }, []);

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

  useEffect(() => {
    localStorage.setItem("selectedPlayer", selectedPlayer);
    localStorage.setItem("selectedSeason", selectedSeason);
    localStorage.setItem("selectedPlayerTwo", selectedPlayerTwo);
    localStorage.setItem("selectedSeasonTwo", selectedSeasonTwo);
  }, [selectedPlayer, selectedSeason, selectedPlayerTwo, selectedSeasonTwo]);

  return (
    <>
      <HeaderContainer>
        <Headline>COMPARE</Headline>
      </HeaderContainer>
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
