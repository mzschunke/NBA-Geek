import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "@/styles";

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2.5rem;
    margin: 0 10px 0 10px;
`;

const PlayerName = styled.h1`
  font-size: 3rem;
  color: #0d48a0;
  text-align: center;`

  const PlayerDetails = styled.div`
  font-size: 1.5rem; 
text-align: left;
  `

const URL = "https://www.balldontlie.io/api/v1/players";

export default function PlayerPage() {
    const router = useRouter(); 
    const { id } = router.query;
    const { data, error, isLoading } = useSWR(URL + "/" + id)
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    const player = data;
    console.log(player);

return (
    <PlayerContainer>
    <PlayerName>{player.last_name}, {player.first_name}</PlayerName>  
    <PlayerDetails>  <p>Position: {player.position}</p>
    <p>Height: {player.height_feet}"{player.height_inches}</p>
    <p>Weight: {player.weight_pounds} lbs.</p>
    <p>Team: {player.team.full_name}</p>
     </PlayerDetails>
     <StyledLink href="/players">🔙 All players</StyledLink>
    </PlayerContainer>
)}
