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

const ImageContainer = styled.header`
  margin-top: 2.5rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
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
    <Headline>NBA GEEK</Headline>
    <main>
    <ImageContainer>
    <Image src="/images/nba-comic.png" width={300} height={300} style={{objectFit: "contain"}} alt="NBA Comic"/>
    </ImageContainer>
    </main>
     <NavBar /> 
    </>
  );
}

