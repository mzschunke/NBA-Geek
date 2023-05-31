import useSWR from "swr";
import { useState } from "react";
import {
  GamesList,
  Headline,
  SingleGame,
  GamesContainer,
  StyledSelect,
  NoData,
} from "@/styles";

export default function GamesDisplay({ id }) {
  const { data, error, isLoading } = useSWR("/api/games", {
    fallbackData: [],
  });

  const [season, setSeason] = useState(2022);

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
      <Headline>Games</Headline>
      {filteredGames.length > 0 ? (
        <GamesContainer>
          <StyledSelect
            value={selectYears.find((option) => option.value === season)}
            options={selectYears}
            onChange={handleSeasonChange}
            placeholder="pick a season"
          />
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
