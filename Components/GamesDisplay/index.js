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
} from "@/styles";

export default function GamesDisplay({ id }) {
  const [season, setSeason] = useState(2022);
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
      (game.home_team.id === parseInt(id) ||
        game.visitor_team.id === parseInt(id)) &&
      game.season === season
  );
  filteredGames.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const regularseasonGames = filteredGames.filter((game) => !game.postseason);
  console.log("regularseasonGames:", regularseasonGames);

  const gamesWon = regularseasonGames.filter(
    (game) =>
      (game.home_team.id === parseInt(id) &&
        game.home_team_score > game.visitor_team_score) ||
      (game.visitor_team.id === parseInt(id) &&
        game.visitor_team_score > game.home_team_score)
  );
  console.log("Regular season games won:", gamesWon.length);

  const gamesLost = regularseasonGames.filter(
    (game) =>
      (game.home_team.id === parseInt(id) &&
        game.home_team_score < game.visitor_team_score) ||
      (game.visitor_team.id === parseInt(id) &&
        game.visitor_team_score < game.home_team_score)
  );
  console.log("Regular season games lost:", gamesLost.length);

  let seasons = [];
  for (let year = 2022; year >= 1946; year--) {
    seasons.push(year);
  }
  const selectYears = seasons.map((season) => ({
    value: season,
    label: season.toString(),
  }));

  function handleSeasonChange(selectedOption) {
    setSeason(selectedOption.value);
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
            <h3>Regular Season</h3>
            <h4>Wins: {gamesWon.length}</h4>
            <h4>Wins: {gamesLost.length}</h4>
          </SelectionContainer>
          {filteredGames.map((game) => (
            <GamesList key={game.id}>
              <SingleGame key={game.id}>
                {game.date.split("T")[0]}
                {": "}
                <br />
                <br />
                {game.home_team.full_name} {game.home_team_score} -{" "}
                {game.visitor_team_score} {game.visitor_team.full_name}
              </SingleGame>
            </GamesList>
          ))}
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
