import Head from "next/head";
import styled from "styled-components"; 
import Image from "next/image";
import NavBar from "../Components/NavBar";
import { Headline } from "@/styles";

const HeaderContainer = styled.header`
  margin-bottom: 0;
  background: rgb(182,211,214);
  background: linear-gradient(90deg, rgba(182,211,214,1) 0%, rgba(39,100,176,1) 100%, rgba(29,162,178,1) 100%, rgba(39,100,176,1) 100%);
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
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
    <Headline>Welcome to NBA GEEK!</Headline>
    <main>
    </main>
     <NavBar /> 
    </>
  );
}

