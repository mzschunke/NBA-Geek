import {
  SelectionContainer,
  StyledSelect,
  StatsList,
  StyledDate,
  SingleGame,
  StyledTable,
  TH,
  TD,
  StyledParagraph,
} from "@/styles";
import { useState, useEffect } from "react";

export default function PlayerStats({ id, CURRENT_SEASON }) {
  const [season, setSeason] = useState(CURRENT_SEASON);
  const [playerStats, setPlayerStats] = useState([]);
  const [teamNames, setTeamNames] = useState({});
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
      `${statsURL}?seasons[]=${season}}&player_ids[]=${id}&per_page=100`
    );
    const data = await response.json();
    setPlayerStats(data.data);
    console.log("Received data:", playerStats);
  }
  async function fetchTeamNames() {
    const response = await fetch(teamNamesURL);
    const data = await response.json();
    const names = data.data.reduce(
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
        <button type="button" onClick={fetchStats}>
          Show Stats
        </button>
      </SelectionContainer>
      {playerStats.length > 0 ? (
        playerStats.map((stat) => (
          <StatsList key={stat._id}>
            <StyledDate>
              {stat.game.date.split("T")[0]}
              {" | "}
              {teamNames[stat.game.home_team_id]} {stat.game.home_team_score}
              {" vs. "}
              {stat.game.visitor_team_score}{" "}
              {teamNames[stat.game.visitor_team_id]}
            </StyledDate>
            <SingleGame>
              {" "}
              <StyledTable>
                <thead>
                  <tr>
                    <TH>PTS</TH>
                    <TH>AST</TH>
                    <TH>REB</TH>
                    <TH>STL</TH>
                    <TH>BLK</TH>
                    <TH>TO</TH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TD>{stat.pts}</TD>
                    <TD>{stat.ast}</TD>
                    <TD>{stat.reb}</TD>
                    <TD>{stat.stl}</TD>
                    <TD>{stat.blk}</TD>
                    <TD>{stat.turnover}</TD>
                  </tr>
                </tbody>
              </StyledTable>
            </SingleGame>
          </StatsList>
        ))
      ) : (
        <StyledParagraph>choose a season to display scores</StyledParagraph>
      )}
    </>
  );
}
