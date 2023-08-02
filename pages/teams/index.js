import NavBar from "@/Components/NavBar";
import TeamOverview from "../../Components/TeamList";
import { HeaderContainer, Headline } from "@/styles";

export default function Teams() {
  return (
    <>
      <HeaderContainer>
        <Headline>TEAMS</Headline>
      </HeaderContainer>
      <TeamOverview />
      <NavBar />
    </>
  );
}
