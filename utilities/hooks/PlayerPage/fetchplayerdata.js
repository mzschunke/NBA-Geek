import { useState, useEffect } from "react";

export const usePlayerStatsData = (season, id) => {
  const [playerStats, setPlayerStats] = useState([]);
  const [teamNames, setTeamNames] = useState({});
  const [showNoData, setShowNoData] = useState(false);
  const statsURL = "https://www.balldontlie.io/api/v1/stats";
  const teamNamesURL =
    "https://www.balldontlie.io/api/v1/teams?page=1&per_page=100";

  async function fetchStats() {
    const response = await fetch(
      `${statsURL}?seasons[]=${season}&player_ids[]=${id}&per_page=100`
    );
    const { data } = await response.json();
    setPlayerStats(data);
    setShowNoData(data.length === 0);
  }

  async function fetchTeamNames() {
    const response = await fetch(teamNamesURL);
    const { data } = await response.json();
    const names = data.reduce(
      (acc, team) => ({
        ...acc,
        [team.id]: team.full_name,
      }),
      {}
    );
    setTeamNames(names);
  }

  useEffect(() => {
    fetchTeamNames();
  }, []);

  return {
    playerStats,
    teamNames,
    showNoData,
    fetchStats,
  };
};
