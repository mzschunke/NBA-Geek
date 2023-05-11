import Head from "next/head";
import TeamOverview from "../Components/TeamList";
import styled from "styled-components"; 
import Image from "next/image";
import NavBar from "../Components/NavBar";

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 0.5rem;  
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 3px;
  color: #0d48a0;
  text-shadow: 1px 1px 1px #000000;
`;

export default function HomePage() {

  return (
    <>
    <Head>
    <title>NBA GEEK</title>
    </Head>
    <Image src="/images/nba-geek.png" width={80} height={80} style={{objectFit: "contain"}} alt="NBA Geek"/>
    <main>
      <Headline>TEAMS</Headline>
      <TeamOverview />
    </main>
    <footer>
     <NavBar /> 
    </footer>
    </>
  );
}

