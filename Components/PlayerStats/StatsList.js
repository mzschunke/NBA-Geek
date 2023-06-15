import { TH, TR, TD } from "@/styles";
import {
  StatsBox,
  StatsList,
  StyledDate,
  SingleGame,
  TeamContainer,
  Score,
  DNP,
} from "./Styling";
import Image from "next/image";

export function StatsListItem({ playerStats, teamNames }) {
  return (
    <>
      {playerStats.map((stat) => (
        <StatsList key={stat._id}>
          <StyledDate>
            {stat.game.date.split("T")[0]}
            {":  "}
          </StyledDate>
          <SingleGame key={stat.id}>
            <TeamContainer>
              <Image
                src={`/images/team-logos/${stat.game.home_team_id}.png`}
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
                alt={stat.game.home_team_id}
              />
              {teamNames[stat.game.home_team_id]}
            </TeamContainer>
            <Score>{stat.game.home_team_score}</Score>
            <TeamContainer>
              <Image
                src={`/images/team-logos/${stat.game.visitor_team_id}.png`}
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
                alt={stat.game.visitor_team_id}
              />
              {teamNames[stat.game.visitor_team_id]}
            </TeamContainer>
            <Score>{stat.game.visitor_team_score}</Score>
            {stat.min !== "00" && (
              <StatsBox>
                <thead>
                  <TR>
                    <TH>MIN</TH>
                    <TH>PTS</TH>
                    <TH>AST</TH>
                    <TH>REB</TH>
                    <TH>OREB</TH>
                    <TH>STL</TH>
                    <TH>BLK</TH>
                    <TH>TO</TH>
                    <TH>PF</TH>
                  </TR>
                </thead>
                <tbody>
                  <tr>
                    <TD>{stat.min}</TD>
                    <TD>{stat.pts}</TD>
                    <TD>{stat.ast}</TD>
                    <TD>{stat.reb}</TD>
                    <TD>{stat.oreb}</TD>
                    <TD>{stat.stl}</TD>
                    <TD>{stat.blk}</TD>
                    <TD>{stat.turnover}</TD>
                    <TD>{stat.pf}</TD>
                  </tr>
                  <tr>
                    <TH>FGM</TH>
                    <TH>FGA</TH>
                    <TH>FG%</TH>
                    <TH>3PM</TH>
                    <TH>3PA</TH>
                    <TH>3P%</TH>
                    <TH>FTM</TH>
                    <TH>FTA</TH>
                    <TH>FT%</TH>
                  </tr>
                  <tr>
                    <TD>{stat.fgm}</TD>
                    <TD>{stat.fga}</TD>
                    <TD>{stat.fg_pct && stat.fg_pct.toFixed(2)}</TD>
                    <TD>{stat.fg3m}</TD>
                    <TD>{stat.fg3a}</TD>
                    <TD>{stat.fg3_pct && stat.fg3_pct.toFixed(2)}</TD>
                    <TD>{stat.ftm}</TD>
                    <TD>{stat.fta}</TD>
                    <TD>{stat.ft_pct && stat.ft_pct.toFixed(2)}</TD>
                  </tr>
                </tbody>
              </StatsBox>
            )}
            {stat.min === "00" && <DNP>DNP</DNP>}
          </SingleGame>
        </StatsList>
      ))}
    </>
  );
}
