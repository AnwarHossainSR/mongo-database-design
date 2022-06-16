import mongoose from "mongoose";
import { optionSubSchema } from "./SubSchema.js";

const Schema = mongoose.Schema;

const questionSetSchema = mongoose.Schema(
  {
    candidate_role: {
      name: {
        type: String,
        required: true,
      },
    },
    questions: [
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

        marks: {
          type: Number,
          required: true,
        },
        approved: {
          is_approved: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending",
          },
          approved_by: {
            type: Schema.Types.ObjectId,
            ref: "users",
          },
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
    ],

    partial_questions_set: [
      {
        assign_to: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        technology: {
          name: {
            type: String,
            required: true,
          },
        },
        total_marks: {
          type: Number,
          required: true,
        },
        no_of_questions: {
          type: Number,
          required: true,
        },
        deadline: {
          type: Date,
          required: true,
        },
        questions: [
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
            marks: {
              type: Number,
              required: true,
            },
            approved: {
              is_approved: {
                type: String,
                enum: ["pending", "accepted", "rejected"],
                default: "pending",
              },
              approved_by: {
                type: Schema.Types.ObjectId,
                ref: "users",
              },
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
        ],
        status: {
          type: String,
          enum: ["pending", "submitted"],
          default: "pending",
        },
      },
    ],
    used_in_exam: {
      type: Boolean,
      default: false,
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

var QuestionSetModel = mongoose.model("question_sets", questionSetSchema);
export default QuestionSetModel;
