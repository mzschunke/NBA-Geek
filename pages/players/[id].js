import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import PlayerStats from "@/Components/PlayerStats";
import {
  PlayerContainer,
  PlayerNameBio,
  PlayerDetails,
  StyledDescriptionList,
  StyledTerm,
  StyledDefinition,
} from "@/styles";

const URL = "https://www.balldontlie.io/api/v1/players";

export default function PlayerPage({ CURRENT_SEASON }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(URL + "/" + id);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const player = data;

  return (
    <>
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
      <PlayerDetails>
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
      </PlayerDetails>
      <PlayerStats id={id} CURRENT_SEASON={CURRENT_SEASON} />
      <NavBar />
    </>
  );
}
