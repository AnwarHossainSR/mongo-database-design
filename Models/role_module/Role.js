import mongoose from "mongoose";

const roleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

var RoleModel = mongoose.model("roles", roleSchema);
export default RoleModel;
