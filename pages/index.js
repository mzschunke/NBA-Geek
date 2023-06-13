import Head from "next/head";
import Image from "next/image";
import NavBar from "../Components/NavBar";
import { HeaderContainer, MainHeadline, ImageContainer } from "@/styles.js";

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
        <MainHeadline>NBA GEEK</MainHeadline>
      </HeaderContainer>
      <main>
        <ImageContainer>
          <Image
            src="/images/nba-comic.png"
            width={375}
            height={410}
            style={{ objectFit: "contain" }}
            alt="NBA Comic"
          />
        </ImageContainer>
      </main>
      <NavBar />
    </>
  );
}
