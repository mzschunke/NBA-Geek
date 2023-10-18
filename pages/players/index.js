import PlayerOverview from "../../Components/PlayerOverview";
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
