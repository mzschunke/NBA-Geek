import Head from "next/head";
import TeamOverview from "../Components/TeamList";
import PlayerOverview from "@/Components/PlayerList";
import styled from "styled-components"; 

const Headline = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-top: 1rem;  
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 3px;
`;

export default function HomePage() {
  return (
    <>
    <Head>
    <title>NBA GEEK</title>
    </Head>
    <PlayerOverview />
    <main>
      <Headline>TEAMS</Headline>
      <TeamOverview />
    </main>
    </>
  );
}

