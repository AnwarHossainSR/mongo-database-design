import express from "express";
import { CreateExam, GetAllExams } from "../Controllers/ExamController.js";

const router = express.Router();

router.get("/", GetAllExams);
router.post("/create", CreateExam);
export default router;
