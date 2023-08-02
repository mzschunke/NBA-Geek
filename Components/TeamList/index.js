import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { Headline, HeaderContainer } from "@/styles";
import Loader from "@/Components/Loader";
import { StyledList, StyledListItem, TeamName } from "./Styling";

const URL = "https://www.balldontlie.io/api/v1/teams?page=1";
export default function TeamOverview() {
  const { data, error, isLoading } = useSWR(URL);
  const teams = data?.data;

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loader />;

  return (
    <>
      <HeaderContainer>
        <Headline>TEAMS</Headline>
      </HeaderContainer>
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
