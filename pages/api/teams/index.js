import dbConnect from "../../../db/connect";
import Teams from "../../../db/models/teams";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const teams = await Teams.find();
    return response.status(200).json(teams);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
