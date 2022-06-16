import mongoose from "mongoose";

const finalCandidateSchema = mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidates",
      required: true,
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
      required: true,
    },
    answer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answers",
      required: true,
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

var FinalCandidateModel = mongoose.model(
  "final_candidates",
  finalCandidateSchema
);
export default FinalCandidateModel;
