import useSWR from "swr";
import Select from "react-select";
import { SelectionBox } from "./Styling";

export default function StatsSelector({
  selectedPlayer,
  onSelectPlayer,
  selectedPlayerTwo,
  onSelectPlayerTwo,
  selectedSeason,
  onSelectSeason,
  selectedSeasonTwo,
  onSelectSeasonTwo,
  CURRENT_SEASON,
}) {
  let seasons = [];
  for (let year = CURRENT_SEASON; year >= 1946; year--) {
    seasons.push(year);
  }
  const { data } = useSWR("/api/players", { fallbackData: [] });

  let sortedPlayers = [];
  if (data) {
    sortedPlayers = data
      .filter((player) => player.last_name.toLowerCase())
      .sort((a, b) => {
        const lastComparison = a.last_name.localeCompare(b.last_name);
        if (lastComparison !== 0) {
          return lastComparison;
        }
        return a.first_name.localeCompare(b.first_name);
      });
  }

  const selectOptions = sortedPlayers.map((player) => ({
    value: player.id,
    label: `${player.first_name} ${player.last_name}`,
  }));

  const selectYears = seasons.map((season) => ({
    value: season,
    label: season.toString(),
  }));

  return (
    <>
      <SelectionBox>
        <Select
          options={selectOptions}
          value={selectOptions.find(
            (option) => option.value === selectedPlayer
          )}
          onChange={onSelectPlayer}
          id="player-select"
          placeholder="Choose 1st player"
          instanceId={1}
        />
        <Select
          value={selectYears.find((option) => option.value === selectedSeason)}
          onChange={onSelectSeason}
          options={selectYears}
          placeholder="Season"
          id="season-select"
          instanceId={2}
        />
      </SelectionBox>
      <SelectionBox>
        <Select
          options={selectOptions}
          value={selectOptions.find(
            (option) => option.value === selectedPlayerTwo
          )}
          onChange={onSelectPlayerTwo}
          id="playertwo-select"
          placeholder="Choose 2nd player"
          instanceId={3}
        />
        <Select
          value={selectYears.find(
            (option) => option.value === selectedSeasonTwo
          )}
          onChange={onSelectSeasonTwo}
          options={selectYears}
          placeholder="Season"
          id="seasontwo-select"
          instanceId={4}
        />
      </SelectionBox>
    </>
  );
}
