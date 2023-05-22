import useSWR from "swr";
import styled from "styled-components";

const seasons = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

const SelectionBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #b6d3d6;
    gap: 5%;
    border: 1px solid black;
    padding: 1rem;
    margin-top: 1rem;
`
const StyledSelect = styled.select`
    margin-bottom: 0.8rem;
`

export default function StatsSelector({selectedPlayer, onSelectPlayer, selectedPlayer2, onSelectPlayer2, selectedSeason, onSelectSeason}) {
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
        <>
        <SelectionBox>
        <label htmlFor="player-select">Choose a player:</label>
        <StyledSelect value={selectedPlayer} onChange={onSelectPlayer} name="player" id="player-select">
        <option value="" disabled>--Please choose a player--</option>
        {sortedPlayers.map(player => (
        <option key={player.id} value={player.id}>{player.last_name}, {player.first_name} 
        </option>))}
        </StyledSelect>
        <label htmlFor="season-select">Choose a season:</label>
        <StyledSelect value={selectedSeason} onChange={onSelectSeason} name="season" id="season-select">
        <option value="" disabled>--Please choose a season--</option>   
        {seasons.map((year) => (
        <option key={year} value={year}>{year}</option>    
        ))}
        </StyledSelect>     
        </SelectionBox>
        </>
    )
}



