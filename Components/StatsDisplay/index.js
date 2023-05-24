import styled from "styled-components";
import useSWR from "swr";
import { StyledTable, TH, TD } from "@/styles";

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export default function StatsDisplay({
  playerStats,
  playerTwoStats,
  selectedPlayer,
  selectedPlayerTwo,
  selectedSeason,
  selectedSeasonTwo,
}) {
  const URL = "https://www.balldontlie.io/api/v1/players/";

  const { data: player } = useSWR(URL + selectedPlayer);

  const { data: playerTwo } = useSWR(URL + selectedPlayerTwo);

  return (
    <StatsContainer>
      {player && !player?.data ? (
        <h3>
          {player.first_name} {player.last_name} | Season:
          {selectedSeason}
        </h3>
      ) : (
        <h3>No First player selected</h3>
      )}
      {playerStats ? (
        <StyledTable>
          <thead>
            <tr>
              <TH>PTS</TH>
              <TH>AST</TH>
              <TH>REB</TH>
              <TH>STL</TH>
              <TH>BLK</TH>
              <TH>TO</TH>
              <TH>FG%</TH>
              <TH>3P%</TH>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TD>{playerStats.pts}</TD>
              <TD>{playerStats.ast}</TD>
              <TD>{playerStats.reb}</TD>
              <TD>{playerStats.stl}</TD>
              <TD>{playerStats.blk}</TD>
              <TD>{playerStats.turnover}</TD>
              <TD>{playerStats.fg_pct}</TD>
              <TD>{playerStats.fg3_pct}</TD>
            </tr>
          </tbody>
        </StyledTable>
      ) : (
        <p>No Data available</p>
      )}
      {playerTwo && !playerTwo?.data ? (
        <h3>
          {playerTwo.first_name} {playerTwo.last_name} | Season:
          {selectedSeasonTwo}
        </h3>
      ) : (
        <h3>No Second player selected</h3>
      )}
      {playerTwoStats ? (
        <StyledTable>
          <thead>
            <tr>
              <TH>PTS</TH>
              <TH>AST</TH>
              <TH>REB</TH>
              <TH>STL</TH>
              <TH>BLK</TH>
              <TH>TO</TH>
              <TH>FG%</TH>
              <TH>3P%</TH>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TD>{playerTwoStats.pts}</TD>
              <TD>{playerTwoStats.ast}</TD>
              <TD>{playerTwoStats.reb}</TD>
              <TD>{playerTwoStats.stl}</TD>
              <TD>{playerTwoStats.blk}</TD>
              <TD>{playerTwoStats.turnover}</TD>
              <TD>{playerTwoStats.fg_pct}</TD>
              <TD>{playerTwoStats.fg3_pct}</TD>
            </tr>
          </tbody>
        </StyledTable>
      ) : (
        <p>No Data available</p>
      )}
    </StatsContainer>
  );
}

// import styled from "styled-components";
// import { StyledTable, TH, TD } from "@/styles";

// const StatsContainer = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: center;
//     margin: 0;
//     padding: 0;
// `

// export default function StatsDisplay({playerStats, playerTwoStats, player, playerTwo, selectedSeason, selectedSeasonTwo}) {
// if (playerTwoStats === undefined)
//     return (
//         <StatsContainer>
//         <h3>{player.first_name} {player.last_name} | Season: {selectedSeason}</h3>
//         <StyledTable>
//         <thead>
//         <tr>
//         <TH>PTS</TH>
//         <TH>AST</TH>
//         <TH>REB</TH>
//         <TH>STL</TH>
//         <TH>BLK</TH>
//         <TH>TO</TH>
//         <TH>FG%</TH>
//         <TH>3P%</TH>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <TD>{playerStats.pts}</TD>
//         <TD>{playerStats.ast}</TD>
//         <TD>{playerStats.reb}</TD>
//         <TD>{playerStats.stl}</TD>
//         <TD>{playerStats.blk}</TD>
//         <TD>{playerStats.turnover}</TD>
//         <TD>{playerStats.fg_pct}</TD>
//         <TD>{playerStats.fg3_pct}</TD>
//         </tr>
//         </tbody>
//         </StyledTable>
//         <h3>No second player selected:</h3>
//         <StyledTable>
//         <thead>
//         <tr>
//         <TH>PTS</TH>
//         <TH>AST</TH>
//         <TH>REB</TH>
//         <TH>STL</TH>
//         <TH>BLK</TH>
//         <TH>TO</TH>
//         <TH>FG%</TH>
//         <TH>3P%</TH>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <TD></TD>
//         <TD></TD>
//         <TD></TD>
//         <TD></TD>
//         <TD></TD>
//         <TD></TD>
//         <TD>%</TD>
//         <TD>%</TD>
//         </tr>
//         </tbody>
//         </StyledTable>
//         </StatsContainer>
// )
// else if (playerStats === undefined)
// return (
//     <StatsContainer>
//         <h3>No First player selected</h3>
//         <StyledTable>
//         <thead>
//         <tr>
//         <TH>PTS</TH>
//         <TH>AST</TH>
//         <TH>REB</TH>
//         <TH>STL</TH>
//         <TH>BLK</TH>
//         <TH>TO</TH>
//         <TH>FG%</TH>
//         <TH>3P%</TH>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         </tr>
//         </tbody>
//         </StyledTable>
//         <h3>{playerTwo.first_name} {playerTwo.last_name} | Season: {selectedSeasonTwo}</h3>
//         <StyledTable>
//         <thead>
//         <tr>
//         <TH>PTS</TH>
//         <TH>AST</TH>
//         <TH>REB</TH>
//         <TH>STL</TH>
//         <TH>BLK</TH>
//         <TH>TO</TH>
//         <TH>FG%</TH>
//         <TH>3P%</TH>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <TD>{playerTwoStats.pts}</TD>
//         <TD>{playerTwoStats.ast}</TD>
//         <TD>{playerTwoStats.reb}</TD>
//         <TD>{playerTwoStats.stl}</TD>
//         <TD>{playerTwoStats.blk}</TD>
//         <TD>{playerTwoStats.turnover}</TD>
//         <TD>{playerTwoStats.fg_pct}</TD>
//         <TD>{playerTwoStats.fg3_pct}</TD>
//         </tr>
//         </tbody>
//         </StyledTable>
//         </StatsContainer>
// )
// else {
//      return (
//         <StatsContainer>
//         <StyledTable>
//         <thead>
//         <tr>
//         <TH>PTS</TH>
//         <TH>AST</TH>
//         <TH>REB</TH>
//         <TH>STL</TH>
//         <TH>BLK</TH>
//         <TH>TO</TH>
//         <TH>FG%</TH>
//         <TH>3P%</TH>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <TD>{playerStats.pts}</TD>
//         <TD>{playerStats.ast}</TD>
//         <TD>{playerStats.reb}</TD>
//         <TD>{playerStats.stl}</TD>
//         <TD>{playerStats.blk}</TD>
//         <TD>{playerStats.turnover}</TD>
//         <TD>{playerStats.fg_pct}</TD>
//         <TD>{playerStats.fg3_pct}</TD>
//         </tr>
//         </tbody>
//         </StyledTable>
//         <p></p>
//         <StyledTable>
//         <thead>
//         <tr>
//         <TH>PTS</TH>
//         <TH>AST</TH>
//         <TH>REB</TH>
//         <TH>STL</TH>
//         <TH>BLK</TH>
//         <TH>TO</TH>
//         <TH>FG%</TH>
//         <TH>3P%</TH>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//         <TD>{playerTwoStats.pts}</TD>
//         <TD>{playerTwoStats.ast}</TD>
//         <TD>{playerTwoStats.reb}</TD>
//         <TD>{playerTwoStats.stl}</TD>
//         <TD>{playerTwoStats.blk}</TD>
//         <TD>{playerTwoStats.turnover}</TD>
//         <TD>{playerTwoStats.fg_pct}</TD>
//         <TD>{playerTwoStats.fg3_pct}</TD>
//         </tr>
//         </tbody>
//         </StyledTable>
//         </StatsContainer>
//      )
// }
// }
