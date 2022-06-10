import express from "express";
import {
  CreateQuestion,
  GetAllQuestions,
} from "../Controllers/QuestionController.js";

const router = express.Router();

router.get("/", GetAllQuestions);
router.post("/create", CreateQuestion);
export default router;
