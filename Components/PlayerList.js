import useSWR from "swr";
import { useState, useEffect  } from "react";

export default function PlayerOverview() {
  const URL = "https://www.balldontlie.io/api/v1/players";
  const PAGE_SIZE = 100;
  const TOTAL_PAGES = 52; 
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSWR(`${URL}?per_page=${PAGE_SIZE}&page=${page}`);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      const fetchedPlayers = data.data;
      const filteredPlayers = fetchedPlayers.filter((player) =>
        player.last_name.toLowerCase().startsWith("a")
      );
      setPlayers((prevPlayers) => [...prevPlayers, ...filteredPlayers]);
      console.log(players);
      if (page < TOTAL_PAGES) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [data]);

if (error) return <div>Failed to load</div>;
if (isLoading) return <div>Loading....</div>;

return (
  <div>
    <h1>Players</h1>
    <ul>
      {players.map((player) => (
        <li key={player.id}>
          {player.last_name}{", "}{player.first_name}
        </li>
      ))}
    </ul>
  </div>
);
}