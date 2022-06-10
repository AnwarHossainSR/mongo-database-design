import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionTypeSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
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

var QuestionTypeModel = mongoose.model("question_types", questionTypeSchema);
export default QuestionTypeModel;
