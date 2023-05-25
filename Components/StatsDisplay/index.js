import styled from "styled-components";
import useSWR from "swr";
import { StyledTable, NoData, TH, TD, PlayerName } from "@/styles";
import BarChart from "../BarChart";
import { useState } from "react";

const StatsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const BarChartContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
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

  // Create a Stats Object from first selected player:
  let statsObjectOne = {};
  if (playerStats) {
    statsObjectOne = { ...playerStats };
    console.log("statsObjectOne:", statsObjectOne);
  }

  // Create a Stats Object from second selected player:
  let statsObjectTwo = {};
  if (playerTwoStats) {
    statsObjectTwo = { ...playerTwoStats };
    console.log("statsObjectTwo:", statsObjectTwo);
  }
  // Create a State for the description of Bar Chart
  const [chartData, setChartData] = useState({
    labels: player.first_name,
    datasets: [
      {
        label: "Season  2023 - PTS per Game",
        data: [statsObjectTwo.pts],
      },
    ],
  });

  return (
    <StatsContainer>
      {!selectedPlayer || !player ? (
        <PlayerName>No 1st player selected</PlayerName>
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
        <PlayerName>No 2nd player selected</PlayerName>
      ) : playerTwoStats ? (
        <>
          <PlayerName>
            Player 2: {playerTwo.first_name} {playerTwo.last_name} | Season:{" "}
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
          <BarChartContainer>
            <BarChart chartData={chartData} />
          </BarChartContainer>
        </>
      ) : (
        <>
          <PlayerName>
            Player 2: {playerTwo.first_name} {playerTwo.last_name} | Season:{" "}
            {selectedSeasonTwo}
          </PlayerName>
          <NoData>No data available for your selection</NoData>
        </>
      )}
    </StatsContainer>
  );
}
