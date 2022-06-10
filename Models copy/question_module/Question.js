import mongoose, { Schema } from "mongoose";

const questionSchema = mongoose.Schema(
  {
    question_text: {
      type: String,
      required: true,
    },
    question_options: {
      type: Schema.Types.Mixed,
      default: null,
    },
    question_type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question_types",
      required: true,
    },
    technoloy_stack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "technologies",
      required: true,
    },
    candidate_role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "candidate_role",
      },
    ],
    correct_answer: [
      {
        type: String,
        required: true,
      },
    ],
    answer_description: {
      type: String,
      default: null,
    },
    manual_evaluation: {
      type: Boolean,
      default: false,
    },
    used_in_exam: {
      type: Boolean,
      default: false,
    },
    remarks: [
      {
        comment: {
          type: String,
          default: null,
        },
        comment_by: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        default: null,
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

var QuestionModel = mongoose.model("questions", questionSchema);
export default QuestionModel;
