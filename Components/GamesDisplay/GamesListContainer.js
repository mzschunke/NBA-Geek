import { GamesList, SingleGame, StyledDate } from "./Styling";
import { NoData } from "@/styles";
import Image from "next/image";

export function GamesListContainer({ games, noDataMessage }) {
  return (
    <div>
      {games.length > 0 ? (
        games.map((game) => (
          <GamesList key={game.id}>
            <SingleGame key={game.id}>
              <StyledDate>
                {game.date.split("T")[0]}
                {": "}
              </StyledDate>
              <Image
                src={`/images/team-logos/${game.home_team.id}.png`}
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
                alt={game.home_team.full_name}
              />
              {game.home_team.full_name} {game.home_team_score} -{" "}
              {game.visitor_team_score}
              <Image
                src={`/images/team-logos/${game.visitor_team.id}.png`}
                width={25}
                height={25}
                style={{ objectFit: "contain" }}
                alt={game.visitor_team.full_name}
              />
              {game.visitor_team.full_name}
            </SingleGame>
          </GamesList>
        ))
      ) : (
        <NoData>{noDataMessage}</NoData>
      )}
    </div>
  );
}
