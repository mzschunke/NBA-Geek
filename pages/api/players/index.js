import dbConnect from "../../../db/connect";
import Players from "../../../db/models/players";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const players = await Players.find();
    console.log(players);
    return response.status(200).json(players);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}

