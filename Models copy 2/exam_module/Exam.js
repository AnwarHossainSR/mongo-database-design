import mongoose from "mongoose";

const examSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    job_id: {
      type: String,
      required: true,
    },
    candidate_role: {
      name: {
        type: String,
        required: true,
      },
    },
    candidate_list: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "candidates",
      },
    ],
    exam_settings: {
      duration: {
        type: Number,
        required: true,
      },
      start_date: {
        type: Date,
        required: true,
      },
      end_date: {
        type: Date,
        required: true,
      },
      start_time: {
        type: Date,
        required: true,
      },
      end_time: {
        type: Date,
        required: true,
      },
      instruction: {
        type: String,
        required: true,
      },
      special_notes: {
        type: String,
        default: null,
      },
    },
    question_set: {
      is_shuffled: {
        type: Boolean,
        default: false,
      },
      question_set: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question_sets",
      },
    },
    approval: {
      approved: {
        type: Boolean,
        default: false,
      },
      approved_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        default: null,
      },
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
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

var ExamModel = mongoose.model("exams", examSchema);
export default ExamModel;
