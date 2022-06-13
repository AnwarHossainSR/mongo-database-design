import mongoose from "mongoose";

export const optionSubSchema = mongoose.Schema({
  option_text: {
    type: String,
    required: true,
  },
  option_code: {
    type: String,
    required: true,
    unique: true,
  },
});
