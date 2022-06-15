import mongoose from "mongoose";
const Schema = mongoose.Schema;

const partialQuestionSetSchema = mongoose.Schema(
  {
    assign_to: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    technology_stack: {
      type: Schema.Types.ObjectId,
      ref: "technologies",
      required: true,
    },
    questions: [
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
          type: Schema.Types.ObjectId,
          ref: "question_types",
          required: true,
        },
        technoloy_stack: {
          type: Schema.Types.ObjectId,
          ref: "technologies",
          required: true,
        },
        candidate_role: [
          {
            type: Schema.Types.ObjectId,
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
              type: Schema.Types.ObjectId,
              ref: "users",
            },
            default: null,
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

var PartialQuestionSetModel = mongoose.model(
  "partial_question_sets",
  partialQuestionSetSchema
);
export default PartialQuestionSetModel;
