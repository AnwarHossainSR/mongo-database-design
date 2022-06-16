import mongoose from "mongoose";

const candidateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      default: null,
    },
    candidate_id: {
      type: String,
      default: "system generated client id",
    },
    password: {
      type: String,
      default: "system generated password id",
    },
    image_url: {
      type: String,
      default: null,
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

var CandidatesModel = mongoose.model("candidates", candidateSchema);
export default CandidatesModel;
