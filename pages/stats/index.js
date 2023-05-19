import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/Stats";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Headline, StyledTable, TH, TR, TD } from "@/styles";
import styled from "styled-components";

const URL = "https://www.balldontlie.io/api/v1/players/"

const StatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export default function Stats() {
    const [selectedPlayer, setSelectedPlayer] = useState(""); 
    const [selectedSeason, setSelectedSeason] = useState(2022); 
    const [playerStats, setPlayerStats] = useState(null);

    const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value)
    };

    const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    fetchPlayer();
    };

    const { data } = useSWR(URL + selectedPlayer);
    const player = data;

    useEffect(() => {
        fetchPlayer();
      }, [selectedPlayer, selectedSeason]);

    async function fetchPlayer() {
        try {
            const response = await fetch(
              `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeason}&player_ids[]=${selectedPlayer}`
            );
            const fetchedData = await response.json();
            const playerStats = fetchedData.data[0];
            setPlayerStats(playerStats);
          } catch (error) {
            console.error("Error fetching player data:", error);
          }
        }

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }
    
    else if (selectedPlayer != "") {
        return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} selectedSeason={selectedSeason} onSelectSeason={handleSeasonChange}/>
        <h3>Player: {player.last_name}, {player.first_name} </h3>
        <h3>Season: {selectedSeason} - Season Average:</h3>
        {playerStats && (
            <StatsContainer>
          <StyledTable>
            <thead>
            <TH>Player Name</TH>
            <TH>PTS</TH>  
            <TH>AST</TH> 
            <TH>REB</TH> 
            <TH>STL</TH>
            <TH>BLK</TH> 
            <TH>TO</TH> 
            <TH>FG%</TH>  
            <TH>3P%</TH> 
            </thead>
            <tbody>
                <TR>
                <TD>{player.last_name}, {player.first_name}</TD>
                <TD>{playerStats.pts}</TD>
                <TD>{playerStats.ast}</TD>
                <TD>{playerStats.reb}</TD>
                <TD>{playerStats.stl}</TD>
                <TD>{playerStats.blk}</TD>
                <TD>{playerStats.turnover}</TD>
                <TD>{playerStats.fg_pct}</TD>
                <TD>{playerStats.fg3_pct}</TD>
                </TR>
                </tbody>
          </StyledTable>
          </StatsContainer>
        )}
        <NavBar />
        </>
    )
}

else {
    return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} selectedSeason={selectedSeason} onSelectSeason={handleSeasonChange}/>
        <p>Nothing selected</p>
        <NavBar />
        </>
    )
}
}


