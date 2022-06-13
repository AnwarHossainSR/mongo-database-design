import mongoose from "mongoose";
import { optionSubSchema } from "./SubSchema.js";
const Schema = mongoose.Schema;

const questionSchema = mongoose.Schema(
  {
    question_type: {
      type: Schema.Types.ObjectId,
      ref: "question_types",
      required: true,
    },
    technology_stack: {
      type: Schema.Types.ObjectId,
      ref: "technologies",
      required: true,
    },
    question_text: {
      type: String,
      required: true,
    },
    question_options: {
      type: Schema.Types.Mixed,
      default: null,
    },
    correct_answers: {
      type: Schema.Types.Mixed,
      default: null,
    },
    mcq_options: [optionSubSchema],
    mcq_answers: [
      {
        option_code: {
          type: String,
          required: true,
        },
      },
    ],
    matching_options: {
      column_1: [optionSubSchema],
      column_2: [optionSubSchema],
    },
    matching_answers: [
      {
        column_1: {
          option_code: {
            type: String,
            required: true,
          },
        },
        column_2: {
          option_code: {
            type: String,
            required: true,
          },
        },
      },
    ],
    candidate_role: [
      {
        type: Schema.Types.ObjectId,
        ref: "candidate_role",
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
          type: Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
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

var QuestionModel = mongoose.model("questions", questionSchema);
export default QuestionModel;
