import mongoose from "mongoose";
const Schema = mongoose.Schema;

const candidateRoleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    updated_by: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

var CandidateRoleModel = mongoose.model("candidate_role", candidateRoleSchema);
export default CandidateRoleModel;
