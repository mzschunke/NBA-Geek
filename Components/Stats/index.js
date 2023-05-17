import styles from "@/styles"
import { Headline } from "@/styles"
import useSWR from "swr";

export default function StatsPage({selectedPlayer, onSelectPlayer}) {
    const {data, error, isLoading} = useSWR("/api/players", { fallbackData: [] });    
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
        <label for="player-select">Choose a player:</label>
    <select value={selectedPlayer} onChange={onSelectPlayer} name="player" id="player-select">
    <option value="" disabled>--Please choose a player--</option>
    {sortedPlayers.map(player => (
        <option key={player.id} value={player.id}>{player.last_name}, {player.first_name} 
    </option>))}
    </select>
    <button type="button">Show Stats</button>   
    </>
    )
}



