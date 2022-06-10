import mongoose from "mongoose";

const questionTypeSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
    },
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

var QuestionTypeModel = mongoose.model("question_types", questionTypeSchema);
export default QuestionTypeModel;
