import useSWR from "swr";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 1rem;
  color: #000000; // #0d48a0 (Tory Blue) ;
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 3px;
`;

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
  background-color: #ffffff;
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

const TeamLogo = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;


const URL = "https://www.balldontlie.io/api/v1/teams?page=1";
export default function TeamOverview() {
  const { data, error, isLoading } = useSWR(URL);
  const teams = data?.data;
  console.log(teams);

 if (error) return <div>Failed to load</div>;
 if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header>TEAMS</Header>
      <StyledList>
      {teams.map((team) => (
        <StyledListItem key={team.id}>
          <TeamLogo src={`../images/team-logos/${team.name}.png`} alt="Team logo - not found" />
          <TeamName>{team.city} {team.name}</TeamName>
        </StyledListItem>
      ))} 
      </StyledList>
    </div>
  );
}

