import styled from "styled-components";
import { StyledTable, TH, TD } from "@/styles";

const StatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export default function StatsDisplay({playerStats}) {
    return (    
        <StatsContainer>
        <StyledTable>
        <thead>
        <TH>PTS</TH>  
        <TH>AST</TH> 
        <TH>REB</TH> 
        <TH>STL</TH>
        <TH>BLK</TH> 
        <TH>TO</TH> 
        <TH>FG%</TH>  
        <TH>3P%</TH> 
        </thead>
        <tbody>
        <TD>{playerStats.pts}</TD>
        <TD>{playerStats.ast}</TD>
        <TD>{playerStats.reb}</TD>
        <TD>{playerStats.stl}</TD>
        <TD>{playerStats.blk}</TD>
        <TD>{playerStats.turnover}</TD>
        <TD>{playerStats.fg_pct}</TD>
        <TD>{playerStats.fg3_pct}</TD>
        </tbody>
        </StyledTable>
        </StatsContainer>
)}
