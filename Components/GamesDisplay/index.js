import useSWR from "swr";
import { useState } from "react";
import { Headline } from "@/styles";
import Select from "react-select";
import { StyledSelect } from "@/styles";

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
      <div>
        <StyledSelect
          value={selectYears.find((option) => option.value === season)}
          options={selectYears}
          onChange={handleSeasonChange}
          placeholder="pick a season"
        />
        {filteredGames.map((game) => (
          <ul key={game.id}>
            <li key={game.id}>
              {game.season} {game.home_team.full_name} {game.home_team_score} -{" "}
              {game.visitor_team_score} {game.visitor_team.full_name}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
