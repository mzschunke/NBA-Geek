import mongoose from "mongoose";

const { Schema } = mongoose;

const teamsSchema = new Schema({
  abbreviation: { type: String, required: true },
  city: { type: String, required: true },
  conference: { type: String, required: false },
  division: { type: String, required: false },
  full_name: { type: String, required: true },
  name: { type: String, required: false },
});

const Teams = mongoose.models.Teams || mongoose.model("Teams", teamsSchema);

export default Teams;
