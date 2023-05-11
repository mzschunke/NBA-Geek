import Head from "next/head";
import TeamOverview from "../Components/TeamList";
import styled from "styled-components"; 
import Image from "next/image";
import NavBar from "../Components/NavBar";

const HeaderContainer = styled.header`
  margin-bottom: 0;
  background: rgb(182,211,214);
  background: linear-gradient(90deg, rgba(182,211,214,1) 0%, rgba(39,100,176,1) 100%, rgba(29,162,178,1) 100%, rgba(39,100,176,1) 100%);
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`

const Headline = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: 0.5rem;  
  font-family: "roboto", sans-serif;
  text-align: center;
  letter-spacing: 3px;
  color: #0d48a0;
  text-shadow: 1px 1px 1px #000000;
  margin-top: 1rem;
  margin-bottom: 0;
`

export default function HomePage() {

  return (
    <>
    <Head>
    <title>NBA GEEK</title>
    </Head>
   <HeaderContainer>
    <Image src="/images/nba-geek.png" width={80} height={80} style={{objectFit: "contain"}} alt="NBA Geek"/>
    <Image src="/images/sports-team.png" width={80} height={80} style={{objectFit: "contain"}} alt="NBA Geek"/>
    </HeaderContainer>
    <main>
      <Headline>TEAMS</Headline>
      <TeamOverview />
    </main>
     <NavBar /> 
    </>
  );
}

