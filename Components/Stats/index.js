import useSWR from "swr";
import styled from "styled-components";

const seasons = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

const SelectionBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: rgb(182,211,214);
    background: linear-gradient(90deg, rgba(182,211,214,1) 0%, rgba(39,100,176,1) 100%, rgba(29,162,178,1) 100%, rgba(39,100,176,1) 100%);
    gap: 10%;
`

export default function StatsPage({selectedPlayer, onSelectPlayer, selectedSeason, onSelectSeason}) {
    const {data} = useSWR("/api/players", { fallbackData: [] });    
    let sortedPlayers = [];
    if (data) {
        sortedPlayers = data
          .filter((player) => player.last_name.toLowerCase())
          .sort((a, b) => {
              const lastComparison = a.last_name.localeCompare(b.last_name);
              if (lastComparison !== 0)
              {
                return lastComparison;
              }
              return a.first_name.localeCompare(b.first_name);
            });
        }

    return (
        <SelectionBox>
        <label for="player-select">Choose a player:</label>
        <select value={selectedPlayer} onChange={onSelectPlayer} name="player" id="player-select">
        <option value="" disabled>--Please choose a player--</option>
        {sortedPlayers.map(player => (
        <option key={player.id} value={player.id}>{player.last_name}, {player.first_name} 
        </option>))}
        </select>
        <label for="season-select">Choose a season:</label>
        <select value={selectedSeason} onChange={onSelectSeason} name="season" id="season-select">
        <option value="" disabled>--Please choose a season--</option>   
        {seasons.map((year) => (
        <option key={year} value={year}>{year}</option>    
        ))}
        </select>     
        </SelectionBox>
    )
}



