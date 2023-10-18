import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { Headline, HeaderContainer } from "@/styles";
import StatsDisplay from "@/Components/StatsDisplay";
import { usePlayerStats } from "@/utilities/hooks/fetchplayer";
import { usePlayerTwoStats } from "@/utilities/hooks/fetchplayertwo";
import { useLocalStorage } from "@/utilities/hooks/uselocalstorage";

export default function Stats({ CURRENT_SEASON }) {
  const [selectedPlayer, setSelectedPlayer] = useLocalStorage(
    "selectedPlayer",
    ""
  );
  const [selectedSeason, setSelectedSeason] = useLocalStorage(
    "selectedSeason",
    ""
  );
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useLocalStorage(
    "selectedPlayerTwo",
    ""
  );
  const [selectedSeasonTwo, setSelectedSeasonTwo] = useLocalStorage(
    "selectedSeasonTwo",
    ""
  );

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
