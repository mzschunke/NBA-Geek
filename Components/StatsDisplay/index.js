import useSWR from "swr";
import { StyledTable, NoData, TH, TD } from "@/styles";
import { StatsContainer, BarChartContainer, PlayerName } from "./Styling";
import BarChart from "../BarChart";
import { useState } from "react";
import BarChartSelect from "../BarChart/Menu";

export default function StatsDisplay({
  playerStats,
  playerTwoStats,
  selectedPlayer,
  selectedPlayerTwo,
  selectedSeason,
  selectedSeasonTwo,
}) {
  const [barSelection, setBarSelection] = useState("pts");

  const URL = "https://www.balldontlie.io/api/v1/players/";

  const { data: player } = useSWR(URL + selectedPlayer);
  const { data: playerTwo } = useSWR(URL + selectedPlayerTwo);

  let statsArray = [];
  if (playerStats && playerTwoStats) {
    statsArray = [{ ...playerStats }, { ...playerTwoStats }];
  }

  const chartData = {
    labels: [
      `${player?.first_name ?? "Player 1"} ${player?.last_name ?? ""}`,
      `${playerTwo?.first_name ?? "Player 2"} ${playerTwo?.last_name ?? ""}`,
    ],
    datasets: [
      {
        label: barSelection,
        data: statsArray.map((data) => data[barSelection]),
        backgroundColor: ["#48cb39", "#ee3434"],
      },
    ],
  };

  return (
    <StatsContainer>
      {!selectedPlayer || !player ? (
        <span />
      ) : playerStats ? (
        <>
          <PlayerName>
            Player 1: {player.first_name} {player.last_name} | Season:{" "}
            {selectedSeason}
          </PlayerName>
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
        </>
      ) : (
        <>
          <PlayerName>
            Player 1: {player.first_name} {player.last_name} | Season:{" "}
            {selectedSeason}
          </PlayerName>
          <NoData>No data available for your selection</NoData>
        </>
      )}

      {!selectedPlayerTwo || !playerTwo ? (
        <span />
      ) : playerTwoStats ? (
        <>
          <PlayerName>
            Player 2: {playerTwo?.first_name} {playerTwo?.last_name} | Season:{" "}
            {selectedSeasonTwo}
          </PlayerName>
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
          <BarChartSelect
            barSelection={barSelection}
            setBarSelection={setBarSelection}
            playerStats={playerStats}
          />
          <BarChartContainer>
            <BarChart chartData={chartData} barSelection={barSelection} />
          </BarChartContainer>
        </>
      ) : (
        <>
          <PlayerName>
            Player 2: {playerTwo?.first_name} {playerTwo?.last_name} | Season:{" "}
            {selectedSeasonTwo}
          </PlayerName>
          <NoData>No data available for your selection</NoData>
        </>
      )}
    </StatsContainer>
  );
}
