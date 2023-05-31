import dbConnect from "@/db/connect";
import Games from "../../../db/models/games";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const games = await Games.find();
    return response.status(200).json(games);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
