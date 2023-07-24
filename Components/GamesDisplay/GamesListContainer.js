import {
  GamesList,
  SingleGame,
  StyledDate,
  TeamContainer,
  TeamContainer2,
  Score,
} from "./Styling";
import { NoData } from "@/styles";
import Image from "next/image";

export function GamesListContainer({ games, noDataMessage, id }) {
  return (
    <>
      {games.length > 0 ? (
        games.map((game) => (
          <GamesList key={game.id}>
            <StyledDate>{game.date.split("T")[0]}:</StyledDate>
            <SingleGame key={game.id}>
              <TeamContainer
                homeTeamId={game.home_team.id}
                visitorTeamId={game.visitor_team.id}
                id={id}
              >
                <Image
                  src={`/images/team-logos/${game.home_team.id}.png`}
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                  alt={game.home_team.full_name}
                />
                {game.home_team.full_name}
              </TeamContainer>
              <Score>{game.home_team_score}</Score>
              <TeamContainer2
                homeTeamId={game.home_team.id}
                visitorTeamId={game.visitor_team.id}
                id={id}
              >
                <Image
                  src={`/images/team-logos/${game.visitor_team.id}.png`}
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                  alt={game.visitor_team.full_name}
                />
                {game.visitor_team.full_name}
              </TeamContainer2>
              <Score>{game.visitor_team_score}</Score>
            </SingleGame>
          </GamesList>
        ))
      ) : (
        <NoData>{noDataMessage}</NoData>
      )}
    </>
  );
}
