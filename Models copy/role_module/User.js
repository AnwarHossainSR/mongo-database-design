import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    employee_id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    reset_token: {
      type: String,
      default: null,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
      required: true,
    },
    technology: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "technologies",
      },
    ],
    image_url: {
      type: String,
      default: null,
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

var UserModel = mongoose.model("users", userSchema);
export default UserModel;
