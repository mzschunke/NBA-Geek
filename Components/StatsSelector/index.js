import useSWR from "swr";
import styled from "styled-components";

let seasons = [];
for (let year = 2022; year >= 1946; year--) {
  seasons.push(year);
}

const SelectionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #b6d3d6;
  gap: 2%;
  border: 1px solid black;
  padding: 0.1rem;
`;

const StyledSelect = styled.select`
  margin-bottom: 0.8rem;
  width: auto;
  border-radius: 6px;
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

  return (
    <>
      <SelectionBox>
        <label htmlFor="player-select">Choose a player:</label>
        <StyledSelect
          value={selectedPlayer}
          onChange={onSelectPlayer}
          name="player"
          id="player-select"
        >
          <option value="" disabled>
            --Please choose a player--
          </option>
          {sortedPlayers.map((player) => (
            <option key={player.id} value={player.id}>
              {player.last_name}, {player.first_name}
            </option>
          ))}
        </StyledSelect>
        <label htmlFor="season-select">Choose a season:</label>
        <StyledSelect
          value={selectedSeason}
          onChange={onSelectSeason}
          name="season"
          id="season-select"
        >
          <option value="" disabled>
            --Please choose a season--
          </option>
          {seasons.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </StyledSelect>
      </SelectionBox>

      <SelectionBox>
        <label htmlFor="playertwo-select">Choose a player:</label>
        <StyledSelect
          value={selectedPlayerTwo}
          onChange={onSelectPlayerTwo}
          name="playertwo"
          id="playertwo-select"
        >
          <option value="" disabled>
            --Please choose a player--
          </option>
          {sortedPlayers.map((player) => (
            <option key={player.id} value={player.id}>
              {player.last_name}, {player.first_name}
            </option>
          ))}
        </StyledSelect>
        <label htmlFor="seasontwo-select">Choose a season:</label>
        <StyledSelect
          value={selectedSeasonTwo}
          onChange={onSelectSeasonTwo}
          name="seasontwo"
          id="seasontwo-select"
        >
          <option value="" disabled>
            --Please choose a season--
          </option>
          {seasons.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </StyledSelect>
      </SelectionBox>
    </>
  );
}
