import useSWR from "swr";
import TeamOverview from "../Components/Teams"; 

export default function HomePage() {
  return (
    <div>
      <h1>NBA Geek</h1>
      <TeamOverview />
    </div>
  );
}

