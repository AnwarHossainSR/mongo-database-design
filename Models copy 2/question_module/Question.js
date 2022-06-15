import mongoose from "mongoose";
import { optionSubSchema } from "./SubSchema.js";
const Schema = mongoose.Schema;

const questionSchema = mongoose.Schema(
  {
    type: {
      name: {
        type: String,
        required: true,
      },
    },
    technology: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    difficulties: {
      name: {
        type: String,
        required: true,
      },
    },
    question_text: {
      type: String,
      unique: true,
      required: true,
    },
    options: {
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
        name: {
          type: String,
          required: true,
        },
      },
    ],
    answer_description: {
      type: String,
      default: null,
    },
    automation: {
      type: Boolean,
      default: true,
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
    tags: [
      {
        name: {
          type: String,
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
