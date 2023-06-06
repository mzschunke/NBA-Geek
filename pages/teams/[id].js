import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import GamesDisplay from "@/Components/GamesDisplay";
import Loader from "@/Components/Loader";

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
  align-items: center;
  padding-top: 2.5rem;
  margin: 0 10px 0 10px;
`;

const TeamName = styled.h2`
  font-size: 2.2rem;
  color: #0d48a0;
  text-align: center;
  text-shadow: 1px 1px 0;
`;

const StyledTeamDetails = styled.div`
  text-align: center;
  font-size: 0.7rem;
  font-weight: 550;
`;

const URL = "https://www.balldontlie.io/api/v1/teams";

export default function TeamPage({ CURRENT_SEASON }) {
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
        <StyledTeamDetails>
          <p>Conference: {team.conference}</p>
          <p>Division: {team.division}</p>
        </StyledTeamDetails>
      </TeamContainer>
      <GamesDisplay id={id} CURRENT_SEASON={CURRENT_SEASON} />
      <NavBar />
    </>
  );
}
