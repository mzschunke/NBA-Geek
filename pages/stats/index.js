import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import { Headline, HeaderContainer } from "@/styles";
import StatsDisplay from "@/Components/StatsDisplay";
import usePlayerStats from "@/utilities/hooks/fetchplayer";
import usePlayerTwoStats from "@/utilities/hooks/fetchplayertwo";

export default function Stats({ CURRENT_SEASON }) {
  const [selectedPlayer, setSelectedPlayer] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedPlayer") || "";
    }
    return "";
  });
  const [selectedSeason, setSelectedSeason] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedSeason") || "";
    }
    return "";
  });
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedPlayerTwo") || "";
    }
    return "";
  });

  const [selectedSeasonTwo, setSelectedSeasonTwo] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("selectedSeasonTwo") || "";
    }
    return "";
  });

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
    localStorage.setItem("selectedPlayer", selectedPlayer);
    localStorage.setItem("selectedSeason", selectedSeason);
    localStorage.setItem("selectedPlayerTwo", selectedPlayerTwo);
    localStorage.setItem("selectedSeasonTwo", selectedSeasonTwo);
  }, [selectedPlayer, selectedSeason, selectedPlayerTwo, selectedSeasonTwo]);

  const playerStats = usePlayerStats(selectedPlayer, selectedSeason);
  const playerTwoStats = usePlayerTwoStats(
    selectedPlayerTwo,
    selectedSeasonTwo
  );

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
