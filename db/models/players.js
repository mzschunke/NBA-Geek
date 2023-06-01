import mongoose from "mongoose";

const { Schema } = mongoose;

const playersSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  height_feet: { type: Number, required: false },
  height_inches: { type: Number, required: false },
  position: { type: String, required: true },
  weight_pounds: { type: Number, required: false },
});

const Players =
  mongoose.models.Players || mongoose.model("Players", playersSchema);

export default Players;
