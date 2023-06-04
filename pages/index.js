import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import NavBar from "../Components/NavBar";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-bottom: 0.2px solid #cee0ed;
  background: rgb(39, 100, 176);
  height: 85px;
`;

const Headline = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: 2.5px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-bottom: 10px;
`;

const ImageContainer = styled.header`
  margin-top: 2.5rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <title>NBA GEEK</title>
      </Head>
      <HeaderContainer>
        <Image
          src="/images/sports-team.png"
          width={75}
          height={75}
          style={{ objectFit: "contain" }}
          alt="NBA Geek"
        />
        <Headline>NBA GEEK</Headline>
      </HeaderContainer>

      <main>
        <ImageContainer>
          <Image
            src="/images/nba-comic.png"
            width={375}
            height={375}
            style={{ objectFit: "contain" }}
            alt="NBA Comic"
          />
        </ImageContainer>
      </main>
      <NavBar />
    </>
  );
}
