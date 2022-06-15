import mongoose from "mongoose";

export const optionSubSchema = mongoose.Schema({
  option_text: {
    type: String,
  },
  option_code: {
    type: String,
    unique: true,
  },
});
