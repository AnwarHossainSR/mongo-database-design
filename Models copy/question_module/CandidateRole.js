import mongoose from "mongoose";

const candidateRoleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

var CandidateRoleModel = mongoose.model("candidate_role", candidateRoleSchema);
export default CandidateRoleModel;
