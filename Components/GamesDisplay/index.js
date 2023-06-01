import useSWR from "swr";
import { useState } from "react";
import {
  GamesList,
  Headline,
  SingleGame,
  GamesContainer,
  StyledSelect,
  NoData,
  SelectionContainer,
  StyledDate,
} from "@/styles";

export default function GamesDisplay({ id, CURRENT_SEASON }) {
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
    return (<div>failed to load</div>), console.log(error);
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

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

  function toggleView() {
    setShowPostseason((prevState) => !prevState);
  }

  return (
    <>
      {filteredGames.length > 0 ? (
        <GamesContainer>
          <SelectionContainer>
            <Headline>Games</Headline>
            <label htmlFor="season-select">Season:</label>
            <StyledSelect
              value={selectYears.find((option) => option.value === season)}
              options={selectYears}
              onChange={handleSeasonChange}
              placeholder="pick a season"
              id="season-select"
            />
            <h3>{showPostseason ? "Postseason" : "Regular Season"}</h3>
            <h4>Wins: {gamesWon.length}</h4>
            <h4>Losses: {gamesLost.length}</h4>
            <button type="button" onClick={toggleView}>
              {showPostseason ? "Show Regular Season" : "Show Postseason"}
            </button>
          </SelectionContainer>
          {showPostseason ? (
            postseasonGames.length > 0 ? (
              postseasonGames.map((game) => (
                <GamesList key={game.id}>
                  <SingleGame key={game.id}>
                    <StyledDate>
                      {game.date.split("T")[0]}
                      {": "}
                    </StyledDate>
                    {game.home_team.full_name} {game.home_team_score} -{" "}
                    {game.visitor_team_score} {game.visitor_team.full_name}
                  </SingleGame>
                </GamesList>
              ))
            ) : (
              <NoData>No Playoff Games for selected season</NoData>
            )
          ) : regularseasonGames.length > 0 ? (
            regularseasonGames.map((game) => (
              <GamesList key={game.id}>
                <SingleGame key={game.id}>
                  <StyledDate>
                    {game.date.split("T")[0]}
                    {": "}
                  </StyledDate>
                  {game.home_team.full_name} {game.home_team_score} -{" "}
                  {game.visitor_team_score} {game.visitor_team.full_name}
                </SingleGame>
              </GamesList>
            ))
          ) : (
            <NoData>No data available for selected season</NoData>
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
