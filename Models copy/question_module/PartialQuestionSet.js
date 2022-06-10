import mongoose from "mongoose";

const partialQuestionSetSchema = mongoose.Schema(
  {
    assign_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    technology_stack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "technologies",
      required: true,
    },
    candidate_role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidate_role",
    },
    questions: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "questions",
        },
        marks: {
          type: Number,
          required: true,
        },
      },
    ],
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

var PartialQuestionSetModel = mongoose.model(
  "partial_question_sets",
  partialQuestionSetSchema
);
export default PartialQuestionSetModel;
