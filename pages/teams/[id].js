import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import { StyledLink } from "@/styles";
import NavBar from "@/Components/NavBar";
import GamesDisplay from "@/Components/GamesDisplay";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;
  margin: 0 10px 0 10px;
`;

const TeamName = styled.h1`
  font-size: 3rem;
  color: #0d48a0;
  text-align: center;
`;

const StyledTeamDetails = styled.div`
  text-align: center;
  color: #0d48a0;
`;

const URL = "https://www.balldontlie.io/api/v1/teams";

export default function TeamPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(URL + "/" + id);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const team = data;

  return (
    <>
      <TeamContainer>
        <StyledLink href="/teams">🔙 All teams</StyledLink>
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
          <h3>Conference: {team.conference}</h3>
          <h3>Division: {team.division}</h3>
        </StyledTeamDetails>
      </TeamContainer>
      <GamesDisplay id={id} />
      <NavBar />
    </>
  );
}
