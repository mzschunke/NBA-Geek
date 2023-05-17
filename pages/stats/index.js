import NavBar from "@/Components/NavBar";
import StatsPage from "@/Components/Stats";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Headline } from "@/styles";

const URL = "https://www.balldontlie.io/api/v1/players/"

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
  
    else {
        return (
        <>
        <Headline>Stats</Headline>
        <StatsPage selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} selectedSeason={selectedSeason} onSelectSeason={handleSeasonChange}/>
        <p>Player ID: {selectedPlayer}</p>
        <h3>Player: {player.last_name}, {player.first_name} </h3>
        <h3>Season: {selectedSeason}</h3>
        {playerStats && (
              <div>
                <p>PTS: {playerStats.pts}</p>
                <p>AST: {playerStats.ast}</p>
                <p>REB: {playerStats.reb}</p>
                <p>STL: {playerStats.stl}</p>
              </div>
            )
        }
        <NavBar />
        </>
    )
}
}


