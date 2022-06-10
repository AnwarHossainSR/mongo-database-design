import express from "express";
import {
  CreateQuestionType,
  GetAllQuestionTypes,
} from "../Controllers/QuestionType.js";

const router = express.Router();

router.get("/", GetAllQuestionTypes);
router.post("/create", CreateQuestionType);
export default router;
