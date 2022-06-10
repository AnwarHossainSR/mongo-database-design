import mongoose from "mongoose";

const partialEvaluationSchema = mongoose.Schema(
  {
    assign_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    evaluation_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluations",
        required: true,
      },
        ],
    //answer
  },
  { timestamps: true }
);

var PartialEvaluationModel = mongoose.model(
  "partial_evaluation",
  partialEvaluationSchema
);
export default PartialEvaluationModel;
