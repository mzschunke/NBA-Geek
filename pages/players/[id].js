import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import NavBar from "@/Components/NavBar";
import PlayerStats from "@/Components/PlayerStats";

const PlayerContainer = styled.div`
  display: flex;
  padding-top: 2.5rem;
  margin-left: 10px;
  gap: 7%;
`;

const PlayerName = styled.h1`
  font-size: 1.8rem;
  color: #0d48a0;
`;

const PlayerDetails = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin: 5px 10px 0 10px;
  text-align: center;
  gap: 3%;
`;

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
        <PlayerName>
          {player.last_name}, {player.first_name}
        </PlayerName>
      </PlayerContainer>
      <PlayerDetails>
        <p>Position: {player?.position ? player.position : "unknown"}</p>
        <p>
          Height:{" "}
          {player?.height_feet
            ? `${player.height_feet}'${player.height_inches}"`
            : "unknown"}
        </p>
        <p>
          Weight:{" "}
          {player?.weight_pounds ? `${player.weight_pounds} lbs.` : "unknown"}
        </p>
        <p>
          Team: {player?.team?.full_name ? player.team.full_name : "unknown"}{" "}
          <Image
            src={`/images/team-logos/${player.team.id}.png`}
            width={25}
            height={25}
            style={{ objectFit: "contain" }}
            alt={player.team.name}
          />
        </p>
      </PlayerDetails>
      <PlayerStats id={id} CURRENT_SEASON={CURRENT_SEASON} />
      <NavBar />
    </>
  );
}
