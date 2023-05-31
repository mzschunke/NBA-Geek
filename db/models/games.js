import mongoose from "mongoose";

const { Schema } = mongoose;

const gamesSchema = new Schema({
  date: { type: String, required: true },
  home_team: { type: Object, required: true },
  home_team_score: { type: Number, required: true },
  period: { type: Number, required: false },
  postseason: { type: Boolean, required: true },
  season: { type: Number, required: true },
  status: { type: String, required: true },
  time: { type: String, required: false },
  visitor_team: { type: Object, required: true },
  visitor_team_score: { type: Number, required: true },
});

const Games = mongoose.models.Games || mongoose.model("Games", gamesSchema);

export default Games;
