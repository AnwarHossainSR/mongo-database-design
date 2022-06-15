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
    roles: {
      role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles",
        required: true,
      },
      permissions: [
        {
          module: {
            type: String,
            required: true,
            unique: true,
          },
          privilages: {
            create: { type: Boolean, default: false },
            update: { type: Boolean, default: false },
            delete: { type: Boolean, default: false },
            read: { type: Boolean, default: false },
          },
        },
      ],
    },
    technology: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    image_url: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

var UserModel = mongoose.model("users", userSchema);
export default UserModel;
