import useSWR from "swr";
import styled from "styled-components";

const StyledList = styled.ul`
    list-style: none; 
    `;

const StyledListItem = styled.li`
align-items: center;
font-size: 0.8rem;
margin-bottom: 0.5rem;
`;

const StyledLetter = styled.h2`
    font-size: 1.5rem;
    color: #0d48a0;
`;

export default function PlayerOverview() {
    const {data, error, isLoading} = useSWR('/api/players', { fallbackData: [] });
    const filteredPlayers = data.filter((player) => 
         player.last_name.toLowerCase().startsWith("a"));
   console.log(filteredPlayers);
    if (error) {return <div>failed to load</div>, console.log(error)}
    if (isLoading) {return <div>loading...</div>}
    else
    return ( 

            <StyledList role="list">
            <StyledLetter>A</StyledLetter>
            {filteredPlayers.map((player) => (
                <StyledListItem key={player.id}>
                    {player.last_name}{", "} {player.first_name}
                </StyledListItem>
            ))}
            </StyledList>
    );
}
