import { StyledSelect, NoData } from "@/styles";
import { SelectionContainer, StatsContainer } from "./Styling";
import { StatsListItem } from "./StatsList";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export default function PlayerStats({ id, CURRENT_SEASON }) {
  const [season, setSeason] = useState(CURRENT_SEASON);
  const [playerStats, setPlayerStats] = useState([]);
  const [teamNames, setTeamNames] = useState({});
  const [showNoData, setShowNoData] = useState(false);
  const statsURL = "https://www.balldontlie.io/api/v1/stats";
  const teamNamesURL =
    "https://www.balldontlie.io/api/v1/teams?page=1&per_page=100";

  let seasons = [];
  for (let year = CURRENT_SEASON; year >= 1946; year--) {
    seasons.push(year);
  }
  const selectYears = seasons.map((season) => ({
    value: season,
    label: season.toString(),
  }));

  function handleSeasonChange(selectedOption) {
    setSeason(selectedOption.value);
  }

  async function fetchStats() {
    const response = await fetch(
      `${statsURL}?seasons[]=${season}&player_ids[]=${id}&per_page=100`
    );
    const { data } = await response.json();
    setPlayerStats(data);
    setShowNoData(data.length === 0);
  }

  async function fetchTeamNames() {
    const response = await fetch(teamNamesURL);
    const { data } = await response.json();
    const names = data.reduce(
      (acc, team) => ({
        ...acc,
        [team.id]: team.full_name,
      }),
      {}
    );
    setTeamNames(names);
  }

  useEffect(() => {
    fetchTeamNames();
  }, []);

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
