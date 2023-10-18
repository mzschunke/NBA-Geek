import { StyledSelect, NoData } from "@/styles";
import { SelectionContainer, StatsContainer } from "./Styling";
import { StatsListItem } from "./StatsList";
import { useState } from "react";
import { Button } from "@mui/material";
import { usePlayerStatsData } from "@/utilities/hooks/PlayerPage/fetchplayerdata.js";

export default function PlayerStats({ id, CURRENT_SEASON, seasons }) {
  const [season, setSeason] = useState(CURRENT_SEASON);
  const { playerStats, teamNames, showNoData, fetchStats } = usePlayerStatsData(
    season,
    id
  );

  const selectYears = seasons.map((season) => ({
    value: season,
    label: season.toString(),
  }));

  function handleSeasonChange(selectedOption) {
    setSeason(selectedOption.value);
  }

  return (
    <>
      <SelectionContainer>
        <StyledSelect
          value={selectYears.find((option) => option.value === season)}
          options={selectYears}
          onChange={handleSeasonChange}
          placeholder="pick a season"
          id="season-select"
        />
        <Button variant="contained" onClick={fetchStats} size="medium">
          Show Games
        </Button>
      </SelectionContainer>
      <StatsContainer>
        {showNoData ? (
          <NoData>No Data available for selected season</NoData>
        ) : (
          <StatsListItem playerStats={playerStats} teamNames={teamNames} />
        )}
      </StatsContainer>
    </>
  );
}
