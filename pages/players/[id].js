import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import PlayerStats from "@/Components/PlayerStats";
import {
  PlayerContainer,
  PlayerNameBio,
  StyledDescriptionList,
  StyledTerm,
  StyledDefinition,
  DescriptionBox,
} from "@/styles";
import Loader from "@/Components/Loader";

const URL = "https://www.balldontlie.io/api/v1/players";

export default function PlayerPage({ CURRENT_SEASON }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: player, error, isLoading } = useSWR(`${URL}/${id}`);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const fullName = `${player.last_name}, ${player.first_name}`;
  const position = player?.position ? player.position : "unknown";
  const height = player?.height_feet
    ? `${player.height_feet}'${player.height_inches}"`
    : "unknown";
  const weight = player?.weight_pounds
    ? `${player.weight_pounds} lbs.`
    : "unknown";
  const team = player?.team?.full_name ? player.team.full_name : "unknown";

  return (
    <>
      <PlayerContainer>
        <Image
          src={`/images/avatar.png`}
          width={75}
          height={75}
          style={{ objectFit: "contain" }}
          alt="No Image provided"
        />
        <PlayerNameBio>{fullName}</PlayerNameBio>
      </PlayerContainer>
      <DescriptionBox>
        <StyledDescriptionList>
          <StyledTerm>Position: </StyledTerm>
          <StyledDefinition>{position}</StyledDefinition>
          <StyledTerm> Height: </StyledTerm>
          <StyledDefinition>{height}</StyledDefinition>
          <StyledTerm> Weight: </StyledTerm>
          <StyledDefinition>{weight}</StyledDefinition>
          <StyledTerm> Team: </StyledTerm>
          <StyledDefinition>{team}</StyledDefinition>
        </StyledDescriptionList>
      </DescriptionBox>
      <PlayerStats id={id} CURRENT_SEASON={CURRENT_SEASON} />
      <NavBar />
    </>
  );
}
