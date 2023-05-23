import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Headline } from "@/styles";
import styled from "styled-components";
import StatsDisplay from "@/Components/StatsDisplay";

const URL = "https://www.balldontlie.io/api/v1/players/"

const SelectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.6rem;
    padding: 1rem;
    margin-bottom: 0;
    padding-bottom: 0;
`

export default function Stats() {
    const [selectedPlayer, setSelectedPlayer] = useState(""); 
    const [selectedSeason, setSelectedSeason] = useState(2022); 
    const [playerStats, setPlayerStats] = useState(null);
    const [selectedPlayerTwo, setSelectedPlayerTwo] = useState(""); 
    const [selectedSeasonTwo, setSelectedSeasonTwo] = useState(2022); 
    const [playerTwoStats, setPlayerTwoStats] = useState(null);

    const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value)
    };

    const handlePlayerTwoChange = (event) => {
        setSelectedPlayerTwo(event.target.value);
        fetchPlayerTwo();
      };

    const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    fetchPlayer();
    fetchPlayerTwo();
    };

    const handleSeasonTwoChange = (event) => {
        setSelectedSeasonTwo(event.target.value);
        fetchPlayer();
        fetchPlayerTwo();
        };

    const { data : player } = useSWR(URL + selectedPlayer);
    console.log("useSWR: player", player);

    const { data : playerTwo } = useSWR(URL + selectedPlayerTwo);
    console.log("useSWR: playerTwo:", playerTwo);

    useEffect(() => {
        fetchPlayer();
        fetchPlayerTwo(); 
      }, [selectedPlayer, selectedSeason, selectedPlayerTwo, selectedSeasonTwo]);

    async function fetchPlayer() {
        try {
            const response = await fetch(
              `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeason}&player_ids[]=${selectedPlayer}`
            );
            const fetchedData = await response.json();
            const playerStats = fetchedData.data[0];
            setPlayerStats(playerStats);
            console.log("PlayerStats:", playerStats);
          } catch (error) {
            console.error("Error fetching player data:", error);
          }
        }

        async function fetchPlayerTwo() {
            try {
                const response = await fetch(
                  `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeasonTwo}&player_ids[]=${selectedPlayerTwo}`
                );
                const fetchedData = await response.json();
                const playerTwoStats = fetchedData.data[0];
                setPlayerTwoStats(playerTwoStats);
                console.log("PlayerTwoStats:", playerTwoStats);
              } catch (error) {
                console.error("Error fetching player data:", error);
              }
            }

    if (!player || !playerTwo) {
        return (
            <p>Loading...</p>
        )
    }
    // Both not selected: 
    else if (selectedPlayer === "" && selectedPlayerTwo === "") {
      return (
          <>
          <Headline>Stats</Headline>
          <StatsSelector 
          selectedPlayer={selectedPlayer} 
          onSelectPlayer={handlePlayerChange} 
          selectedPlayerTwo={selectedPlayerTwo} 
          onSelectPlayerTwo={handlePlayerTwoChange}
          selectedSeason={selectedSeason} 
          onSelectSeason={handleSeasonChange}
          selectedSeasonTwo={selectedSeasonTwo} 
          onSelectSeasonTwo={handleSeasonTwoChange}
          />
        <SelectionContainer>
        <h3>Player 1: Nothing selected </h3>
        </SelectionContainer>
          <SelectionContainer>
        <h3>Player 2: Nothing selected</h3>
        </SelectionContainer>
          <NavBar />
          </>
      )
  }
  // Both no data available: 
  else if (playerStats === undefined && playerTwoStats === undefined) {
    return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector 
        selectedPlayer={selectedPlayer} 
        nSelectPlayer={handlePlayerChange}
        selectedPlayerTwo={selectedPlayerTwo} 
        onSelectPlayerTwo={handlePlayerTwoChange} 
        selectedSeason={selectedSeason} 
        onSelectSeason={handleSeasonChange}
        selectedSeasonTwo={selectedSeasonTwo} 
        onSelectSeasonTwo={handleSeasonTwoChange}
        />
        <SelectionContainer>
        <h3>Player: {player.last_name} {player.first_name} || Season: {selectedSeason} - Season Average:</h3>
        <p>No data available</p>
        </SelectionContainer>
        <SelectionContainer>
        <h3>Player: {playerTwo.last_name} {playerTwo.first_name} || Season: {selectedSeasonTwo} - Season Average:</h3>
        <p>No data available</p>
        </SelectionContainer>
        <NavBar />
        </>
    )
}
// Only first player selected: 
else if (selectedPlayer !== "" && selectedPlayerTwo === "") {
    return (
    <>
    <Headline>Stats</Headline>
    <StatsSelector 
    selectedPlayer={selectedPlayer} 
    onSelectPlayer={handlePlayerChange} 
    selectedPlayerTwo={selectedPlayerTwo} 
    onSelectPlayerTwo={handlePlayerTwoChange} 
    selectedSeason={selectedSeason} 
    onSelectSeason={handleSeasonChange}
    selectedSeasonTwo={selectedSeasonTwo} 
    onSelectSeasonTwo={handleSeasonTwoChange}
    />
    <SelectionContainer>
    {playerStats && (
    <StatsDisplay playerStats={playerStats} player={player} selectedSeason={selectedSeason} selectedPlayer={selectedPlayer}> 
    </StatsDisplay>
    )}
    </SelectionContainer>
    <NavBar />
    </>
)
}  
// Only second player selected
else if (selectedPlayer === "" && selectedPlayerTwo !== "") {
    return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector 
        selectedPlayer={selectedPlayer} 
        onSelectPlayer={handlePlayerChange} 
        selectedPlayerTwo={selectedPlayerTwo} 
        onSelectPlayerTwo={handlePlayerTwoChange}
        selectedSeason={selectedSeason} 
        onSelectSeason={handleSeasonChange}
        selectedSeasonTwo={selectedSeasonTwo} 
        onSelectSeasonTwo={handleSeasonTwoChange}
        />
        <SelectionContainer> 
        <StatsDisplay playerTwoStats={playerTwoStats} playerTwo={playerTwo} selectedSeasonTwo={selectedSeasonTwo}>
        </StatsDisplay>
        </SelectionContainer>
        <NavBar />
        </>
    )
}
// both selected: 
else {
    return (
        <>
        <Headline>Stats</Headline>
        <StatsSelector 
        selectedPlayer={selectedPlayer} 
        onSelectPlayer={handlePlayerChange} 
        selectedPlayerTwo={selectedPlayerTwo} 
        onSelectPlayerTwo={handlePlayerTwoChange} 
        selectedSeason={selectedSeason} 
        onSelectSeason={handleSeasonChange}
        selectedSeasonTwo={selectedSeasonTwo} 
        onSelectSeasonTwo={handleSeasonTwoChange}
        />
        <SelectionContainer>
        {playerStats && (
        <StatsDisplay playerStats={playerStats} player={player} selectedSeason={selectedSeason} selectedPlayer={selectedPlayer}> 
        </StatsDisplay>
        )}
        </SelectionContainer>
        <SelectionContainer> 
        <StatsDisplay playerTwoStats={playerTwoStats} player={player} playerTwo={playerTwo} selectedSeasonTwo={selectedSeasonTwo}>
        </StatsDisplay>
        </SelectionContainer>
        <NavBar />
        </>
    )
}
}






