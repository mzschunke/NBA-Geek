import PlayerOverview from "../../Components/PlayerList";
import NavBar from "@/Components/NavBar";
import { Headline, HeaderContainer } from "@/styles";

export default function Players() {
  return (
    <>
      <HeaderContainer>
        <Headline>PLAYERS</Headline>
      </HeaderContainer>
      <PlayerOverview />
      <NavBar />
    </>
  );
}
