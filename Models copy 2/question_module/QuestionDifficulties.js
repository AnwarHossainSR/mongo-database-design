import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionDifficultiesSchema = mongoose.Schema(
  {
    name: {
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

var QuestionDifficultiesModel = mongoose.model(
  "questions_difficulties",
  questionDifficultiesSchema
);
export default QuestionDifficultiesModel;
