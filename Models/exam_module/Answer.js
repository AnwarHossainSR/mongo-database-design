import mongoose from "mongoose";

const answerSchema = mongoose.Schema(
  {
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exams",
      required: true,
    },
    candidates_answer: [
      {
        candidate: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "candidates",
        },
        answers: [
          {
            question: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "questions",
            },
            answer: [
              {
                type: String,
              },
            ],
            marks: {
              type: Number,
              default: null,
            },
          },
        ],
      },
    ],
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
