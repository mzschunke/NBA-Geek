import useSWR from "swr";
import styled from "styled-components";
import Select from "react-select";

let seasons = [];
for (let year = 2022; year >= 1946; year--) {
  seasons.push(year);
}

const SelectionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #b6d3d6;
  padding: 0.5rem;
`;

export default function StatsSelector({
  selectedPlayer,
  onSelectPlayer,
  selectedPlayerTwo,
  onSelectPlayerTwo,
  selectedSeason,
  onSelectSeason,
  selectedSeasonTwo,
  onSelectSeasonTwo,
}) {
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
        />
        <Select
          value={selectYears.find((option) => option.value === selectedSeason)}
          onChange={onSelectSeason}
          options={selectYears}
          placeholder="Select a Season"
          id="season-select"
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
        />
        <Select
          value={selectYears.find(
            (option) => option.value === selectedSeasonTwo
          )}
          onChange={onSelectSeasonTwo}
          options={selectYears}
          placeholder="Select a Season"
          id="seasontwo-select"
        />
      </SelectionBox>
    </>
  );
}
