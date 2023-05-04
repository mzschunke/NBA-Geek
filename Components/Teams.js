import useSWR from "swr";

const URL = "https://www.balldontlie.io/api/v1/teams";
export default function TeamOverview() {
  const { data, error, isLoading } = useSWR(URL);
  const teams = data?.data;
  console.log(teams);

 if (error) return <div>Failed to load</div>;
 if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Teams:</h1>
      <ul>
      {teams.map((team) => (
      <li key={team.id}>{team.city} {team.name}</li>
      ))} 
      </ul>  
    </div>
  );
}

