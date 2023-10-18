import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import GamesDisplay from "@/Components/GamesDisplay";
import Loader from "@/Components/Loader";
import { TeamContainer, TeamName, StyledTeamDetails } from "@/styles";

const URL = "https://www.balldontlie.io/api/v1/teams";

export default function TeamPage({ CURRENT_SEASON, seasons }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: team, error, isLoading } = useSWR(URL + "/" + id);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loader />;

  return (
    <>
      <TeamContainer>
        <Image
          src={`/images/team-logos/${team.id}.png`}
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
          alt={team.name}
        />
        <TeamName>
          {team.city} {team.name}
        </TeamName>
      </TeamContainer>
      <StyledTeamDetails>
        Conference: {team.conference} | Division: {team.division}
      </StyledTeamDetails>
      <GamesDisplay id={id} CURRENT_SEASON={CURRENT_SEASON} seasons={seasons} />
      <NavBar />
    </>
  );
}
