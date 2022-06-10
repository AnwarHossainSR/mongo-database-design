import mongoose from "mongoose";

const questionSetSchema = mongoose.Schema(
  {
    candidate_role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidate_role",
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
      },
    ],
    used_in_exam: {
      type: Boolean,
      default: false,
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

var QuestionSetModel = mongoose.model("question_sets", questionSetSchema);
export default QuestionSetModel;
