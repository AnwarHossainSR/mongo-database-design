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
      type: mongoose.Schema.Types.ObjectId,
      ref: "candidate_role",
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
      questions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question_sets",
      },
    },
    total_marks: {
      type: Number,
      required: true,
    },
    approval: {
      approved: {
        type: Boolean,
        default: false,
      },
      approved_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
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
