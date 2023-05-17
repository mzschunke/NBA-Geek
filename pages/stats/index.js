import NavBar from "@/Components/NavBar";
import StatsPage from "@/Components/Stats";
import { useState } from "react";
import useSWR from "swr";
import { Headline } from "@/styles"; 

const URL = "https://www.balldontlie.io/api/v1/players/"

export default function Stats() {
    const [selectedPlayer, setSelectedPlayer] = useState("");  

    const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value);
    };

    const PlayerData = URL + selectedPlayer; 
    const { data, error, isLoading } = useSWR(URL + selectedPlayer);
    const player = data;
    console.log(player);

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }

    else return (
        <>
        <Headline>Stats</Headline>
        <StatsPage selectedPlayer={selectedPlayer} onSelectPlayer={handlePlayerChange} />
        <p>Player ID: {selectedPlayer}</p>
        <p>Player: {player.last_name}, {player.first_name} </p>
        <NavBar />
        </>
    )
}

