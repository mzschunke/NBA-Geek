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
  PlayerBox,
} from "@/styles";
import Loader from "@/Components/Loader";

const URL = "https://www.balldontlie.io/api/v1/players";

export default function PlayerPage({ CURRENT_SEASON }) {
  const router = useRouter();
  const { id } = router.query;
  const { data: player, error, isLoading } = useSWR(URL + "/" + id);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <Loader />;

  return (
    <>
      <PlayerBox>
        <PlayerContainer>
          <Image
            src={`/images/avatar.png`}
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            alt="No Image provided"
          />
          <PlayerNameBio>
            {player.last_name}, {player.first_name}
          </PlayerNameBio>
        </PlayerContainer>
        <StyledDescriptionList>
          <StyledTerm>Position: </StyledTerm>
          <StyledDefinition>
            {player?.position ? player.position : "unknown"}
          </StyledDefinition>
          <StyledTerm> Height: </StyledTerm>
          <StyledDefinition>
            {" "}
            {player?.height_feet
              ? `${player.height_feet}'${player.height_inches}"`
              : "unknown"}
          </StyledDefinition>
          <StyledTerm> Weight: </StyledTerm>
          <StyledDefinition>
            {" "}
            {player?.weight_pounds ? `${player.weight_pounds} lbs.` : "unknown"}
          </StyledDefinition>
          <StyledTerm> Team: </StyledTerm>
          <StyledDefinition>
            {player?.team?.full_name ? player.team.full_name : "unknown"}{" "}
          </StyledDefinition>
        </StyledDescriptionList>
        <PlayerStats id={id} CURRENT_SEASON={CURRENT_SEASON} />
      </PlayerBox>
      <NavBar />
    </>
  );
}
