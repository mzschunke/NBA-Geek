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
import { useState } from "react";

export default function PlayerStats({ id, CURRENT_SEASON }) {
  const [season, setSeason] = useState(CURRENT_SEASON);
  const [playerStats, setPlayerStats] = useState([]);
  const URL = "https://www.balldontlie.io/api/v1/stats";

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
      `${URL}?seasons[]=${season}}&player_ids[]=${id}&per_page=100`
    );
    const data = await response.json();
    setPlayerStats(data.data);
    console.log("Received data:", playerStats);
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
              {stat.team.full_name} {stat.game.home_team_score}
              {" vs. "}
              {stat.game.visitor_team_score}
              {"  Harlem Globetrotters"}
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TD>{stat.pts}</TD>
                    <TD>{stat.ast}</TD>
                    <TD>{stat.reb}</TD>
                    <TD>{stat.stl}</TD>
                    <TD>{stat.blk}</TD>
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
