import {
  StyledSelect,
  StatsList,
  StyledDate,
  SingleGame,
  StatsBox,
  TH,
  TD,
  NoData,
  StyledParagraph,
} from "@/styles";
import styled from "styled-components";
import { useState, useEffect } from "react";

const SelectionContainer = styled.section`
  border-radius: 10px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6%;
`;

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
    const data = await response.json();
    setPlayerStats(data.data);
    setShowNoData(data.data.length === 0);
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
          Show Games
        </button>
      </SelectionContainer>
      {showNoData ? (
        <NoData>No Data available for selected season</NoData>
      ) : (
        playerStats.map((stat) => (
          <StatsList key={stat._id}>
            <StyledDate>
              {stat.game.date.split("T")[0]}
              {":  "}
            </StyledDate>
            <StyledParagraph>
              {teamNames[stat.game.home_team_id]} {stat.game.home_team_score}
              {" - "}
              {stat.game.visitor_team_score}{" "}
              {teamNames[stat.game.visitor_team_id]}
            </StyledParagraph>
            <SingleGame key={stat._id}>
              <StatsBox>
                <thead>
                  <tr>
                    <TH>MIN</TH>
                    <TH>PTS</TH>
                    <TH>AST</TH>
                    <TH>REB</TH>
                    <TH>OREB</TH>
                    <TH>STL</TH>
                    <TH>BLK</TH>
                    <TH>TO</TH>
                    <TH>PF</TH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TD>{stat.min}</TD>
                    <TD>{stat.pts}</TD>
                    <TD>{stat.ast}</TD>
                    <TD>{stat.reb}</TD>
                    <TD>{stat.oreb}</TD>
                    <TD>{stat.stl}</TD>
                    <TD>{stat.blk}</TD>
                    <TD>{stat.turnover}</TD>
                    <TD>{stat.pf}</TD>
                  </tr>
                  <tr>
                    <TH>FGM</TH>
                    <TH>FGA</TH>
                    <TH>FG%</TH>
                    <TH>3PM</TH>
                    <TH>3PA</TH>
                    <TH>3P%</TH>
                    <TH>FTM</TH>
                    <TH>FTA</TH>
                    <TH>FT%</TH>
                  </tr>
                  <tr>
                    <TD>{stat.fgm}</TD>
                    <TD>{stat.fga}</TD>
                    <TD>{stat.fg_pct}</TD>
                    <TD>{stat.fg3m}</TD>
                    <TD>{stat.fg3a}</TD>
                    <TD>{stat.fg3_pct}</TD>
                    <TD>{stat.ftm}</TD>
                    <TD>{stat.fta}</TD>
                    <TD>{stat.ft_pct}</TD>
                  </tr>
                </tbody>
              </StatsBox>
            </SingleGame>
          </StatsList>
        ))
      )}
    </>
  );
}