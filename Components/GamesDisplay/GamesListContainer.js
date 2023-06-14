import { GamesList, SingleGame, StyledDate } from "./Styling";
import { NoData } from "@/styles";

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
              {game.home_team.full_name} {game.home_team_score} -{" "}
              {game.visitor_team_score} {game.visitor_team.full_name}
            </SingleGame>
          </GamesList>
        ))
      ) : (
        <NoData>{noDataMessage}</NoData>
      )}
    </div>
  );
}
