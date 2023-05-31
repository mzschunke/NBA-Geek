import dbConnect from "@/db/connect";
import Games from "../../../db/models/games";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const { teamId, season } = request.query;

    let gamesQuery = Games.find();

    if (teamId) {
      const teamIdInt = parseInt(teamId);
      gamesQuery = gamesQuery.or([
        { "home_team.id": teamIdInt },
        { "visitor_team.id": teamIdInt },
      ]);
    }

    if (season) {
      const seasonInt = parseInt(season);
      gamesQuery = gamesQuery.where("season").equals(seasonInt);
    }

    const games = await gamesQuery.exec();
    return response.status(200).json(games);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
