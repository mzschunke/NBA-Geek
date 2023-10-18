import useSWR from "swr";
import { useState } from "react";
import { SubHeadline, GamesContainer, SelectionContainer } from "./Styling";
import { NoData, StyledSelect } from "@/styles";
import { GamesListContainer } from "./GamesListContainer";
import { Button } from "@mui/material";
import Loader from "../Loader";

export default function GamesDisplay({ id, CURRENT_SEASON, seasons }) {
  const parseID = Number.parseInt(id, 10);
  const [season, setSeason] = useState(CURRENT_SEASON);
  const [showPostseason, setShowPostseason] = useState(false);
  const { data, error, isLoading } = useSWR(
    `/api/games?teamId=${id}&season=${season}`,
    {
      fallbackData: [],
    }
  );

  if (error) {
    console.error(error);
    return <div>failed to load</div>;
  }

  if (isLoading) return <Loader />;

  const filteredGames = data.filter(
    (game) =>
      (game.home_team.id === parseID || game.visitor_team.id === parseID) &&
      game.season === season
  );
  filteredGames.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const regularseasonGames = filteredGames.filter((game) => !game.postseason);

  const postseasonGames = filteredGames.filter((game) => game.postseason);

  const gamesWon = showPostseason
    ? postseasonGames.filter(
        (game) =>
          (game.home_team.id === parseID &&
            game.home_team_score > game.visitor_team_score) ||
          (game.visitor_team.id === parseID &&
            game.visitor_team_score > game.home_team_score)
      )
    : regularseasonGames.filter(
        (game) =>
          (game.home_team.id === parseID &&
            game.home_team_score > game.visitor_team_score) ||
          (game.visitor_team.id === parseID &&
            game.visitor_team_score > game.home_team_score)
      );

  const gamesLost = showPostseason
    ? postseasonGames.filter(
        (game) =>
          (game.home_team.id === parseID &&
            game.home_team_score < game.visitor_team_score) ||
          (game.visitor_team.id === parseID &&
            game.visitor_team_score < game.home_team_score)
      )
    : regularseasonGames.filter(
        (game) =>
          (game.home_team.id === parseID &&
            game.home_team_score < game.visitor_team_score) ||
          (game.visitor_team.id === parseID &&
            game.visitor_team_score < game.home_team_score)
      );

  const selectYears = seasons.map((season) => ({
    value: season,
    label: season.toString(),
  }));

  function handleSeasonChange(selectedOption) {
    setSeason(selectedOption.value);
  }

  function toggleView() {
    setShowPostseason((prevState) => !prevState);
  }

  return (
    <>
      {filteredGames.length > 0 ? (
        <GamesContainer>
          <SelectionContainer>
            <SubHeadline>All Games</SubHeadline>
            <label htmlFor="season-select">Season:</label>
            <StyledSelect
              value={selectYears.find((option) => option.value === season)}
              options={selectYears}
              onChange={handleSeasonChange}
              placeholder="pick a season"
              id="season-select"
            />
            <Button
              variant="contained"
              onClick={toggleView}
              style={{ marginTop: "10px" }}
            >
              {showPostseason ? "Show Regular Season" : "Show Postseason"}
            </Button>
            <h3>{showPostseason ? "Postseason" : "Regular Season"}</h3>
            <h4>Wins: {gamesWon.length}</h4>
            <h4>Losses: {gamesLost.length}</h4>
          </SelectionContainer>
          {showPostseason ? (
            <GamesListContainer
              games={postseasonGames}
              noDataMessage="No Playoff Games for selected season"
              id={parseID}
            />
          ) : (
            <GamesListContainer
              games={regularseasonGames}
              noDataMessage="No data available for selected season"
              id={parseID}
            />
          )}
        </GamesContainer>
      ) : (
        <GamesContainer>
          <StyledSelect
            value={selectYears.find((option) => option.value === season)}
            options={selectYears}
            onChange={handleSeasonChange}
            placeholder="pick a season"
          />
          <NoData>No data available for selected season</NoData>
        </GamesContainer>
      )}
    </>
  );
}
