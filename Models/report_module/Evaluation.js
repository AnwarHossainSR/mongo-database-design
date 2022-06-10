import mongoose from "mongoose";

const evaluationSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

var EvaluationModel = mongoose.model("evaluations", evaluationSchema);
export default EvaluationModel;
