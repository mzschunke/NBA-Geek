import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Headline } from "@/styles";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.5rem;
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TeamName = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #0d48a0;
  text-align: center;
`;

const URL = "https://www.balldontlie.io/api/v1/teams?page=1";
export default function TeamOverview() {
  const { data, error, isLoading } = useSWR(URL);
  const teams = data?.data;

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Headline>TEAMS</Headline>
      <StyledList role="list">
        {teams.map((team) => (
          <Link href={`/teams/${team.id}`} key={team.id}>
            <StyledListItem key={team.id}>
              <Image
                src={`/images/team-logos/${team.id}.png`}
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
                alt={team.name}
              />
              <TeamName>
                {team.city} {team.name}
              </TeamName>
            </StyledListItem>
          </Link>
        ))}
      </StyledList>
    </>
  );
}
