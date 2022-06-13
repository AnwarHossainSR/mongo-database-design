import mongoose from "mongoose";
const Schema = mongoose.Schema;

const answerSchema = mongoose.Schema(
  {
    candidate: {
      type: Schema.Types.ObjectId,
      ref: "candidates",
      required: true,
    },
    exam: {
      type: Schema.Types.ObjectId,
      ref: "exams",
      required: true,
    },
    answers: [
      {
        question_id: {
          type: String,
          required: true,
        },
        answer: {
          type: Schema.Types.Mixed,
          default: null,
        },
        answer_code: [
          {
            type: String,
            required: true,
          },
        ],
        mark: {
          type: Number,
          default: 0,
        },
      },
    ],
    total_marks: {
      type: Number,
      default: 0,
    },
    is_checked: {
      type: String,
      enum: ["pending", "checking", "completed", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

var AnswerModel = mongoose.model("answers", answerSchema);
export default AnswerModel;
