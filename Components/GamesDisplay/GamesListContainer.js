import {
  GamesList,
  SingleGame,
  StyledDate,
  TeamContainer,
  ScoreContainer,
  Score,
} from "./Styling";
import { NoData } from "@/styles";
import Image from "next/image";

export function GamesListContainer({ games, noDataMessage }) {
  return (
    <>
      {games.length > 0 ? (
        games.map((game) => (
          <GamesList key={game.id}>
            <StyledDate>
              {game.date.split("T")[0]}
              {": "}
            </StyledDate>
            <SingleGame key={game.id}>
              <TeamContainer>
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
              <TeamContainer>
                <Image
                  src={`/images/team-logos/${game.visitor_team.id}.png`}
                  width={25}
                  height={25}
                  style={{ objectFit: "contain" }}
                  alt={game.visitor_team.full_name}
                />
                {game.visitor_team.full_name}
              </TeamContainer>
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
