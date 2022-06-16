import mongoose from "mongoose";

const TechnologySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);
var TechnologyModel = mongoose.model("technologies", TechnologySchema);
export default TechnologyModel;
